let User = require("../models/User");
const sendEmail = require("../mail");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const _environment = require("../Helpers/config");

const environment = _environment.environment;

exports.index = async (req, res) => {}; // get all | list all
exports.show = async (req, res) => {}; // show specifix auth
exports.create = async (req, res) => {}; // create a new auth
exports.edit = async (req, res) => {}; // edit a auth
exports.update = async (req, res) => {}; // update a auth
exports.delete = async (req, res) => {}; // delete a auth

exports.register = [
  check("full_name")
    .notEmpty()
    .withMessage("full name is required")
    .isLength({ min: 3 })
    .withMessage("full name must be more than 3 characters"),

  check("email").isEmail().withMessage("please provide a valid email"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least six characters in length"),

  check("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("password confirmation does not match password");
    }
    return true;
  }),

  //controller function
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructing the req.body data to get the fields
    const { full_name, email, password, currency } = req.body;

    //check if the user alreadu exsit
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //create a new data object from the req datas
    const newUser = new User({
      username: full_name,
      email: email,
      password: hashedPassword,
      password_token: "0000",
      password_token_timer: null,
      created_at: new Date().toLocaleDateString(),
      updated_at: new Date().toLocaleDateString(),
      currency: currency,
    });

    // push data object to users
    await newUser.save();

    //create a new jwt payload
    const payload = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    };

    const token = jwt.sign(payload, "cat", { expiresIn: "3h" });

    return res.status(200).json({ newUser, token });
  },
];

exports.login = [
  check("email").isEmail().withMessage("please provide a valid email"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least six characters in length"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    //Find user by email in Users Model/Schemes
    const user = users.users.find((user) => user.email === email);

    //Handle case when user is not found
    if (!user) {
      return res.status(404).json({ error: "Email not in Database" });
    }

    //check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    //create JWT payload
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, "cat", { expiresIn: "3h" });

    //if email and password is correct, send success message
    return res.json({
      message: "Login Successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  },
];

exports.ForgetPassword = (req, res) => {
  const { email } = req.body;

  const user = users.users.find((item) => item.email === email);

  if (!user) {
    return res.status(404).json({ message: "Email not found " });
  }
  //reset user password_token
  const generate_random_token = Math.floor(Math.random() * 1000000);
  user.password_token = generate_random_token;

  user.password_token_timer = new Date().toISOString();

  //update users model
  const userindex = users.users.findIndex((u) => u.id === user.id);
  users.users[userindex] = user;

  //send email to user
  sendEmail(
    email,
    "Password Reset Request",
    `here is your link to reset your password
     ${environment.BACKEND_PORT}/api/auth/forget_password_confirmation?token=${generate_random_token}`
  )
    .then(() => {
      return res
        .status(200)
        .json({ message: "password reset email sent succesfully" });
    })
    .catch((err) => {
      return res.status(500).json({
        message: " Error sending mail",
        error: err.message,
      });
    });
};
