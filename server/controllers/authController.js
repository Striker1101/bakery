let User = require("../models/User");
const sendEmail = require("../mail");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const _environment = require("../Helpers/config");

const environment = _environment.environment;

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
      return res.status(409).json({ error: "Email is already in use" });
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
    const user = await User.findOne({ email });

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

exports.ForgetPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "Email not found " });
  }
  //reset user password_token
  const generate_random_token = Math.floor(Math.random() * 1000000);
  user.password_token = generate_random_token;

  user.password_token_timer = new Date();

  //update users model
  await user.save();

  //send email to user
  sendEmail(
    email,
    "Password Reset Request",
    `here is your link to reset your password
     ${environment.BACKEND_PORT}/api/auth/forget_password_confirmation?token=${generate_random_token}&user_id=${user.id}`
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

exports.forgetPasswordConfirmation = [
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least six characters in length"),

  check("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),

  async (req, res) => {
    // Validate the incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password } = req.body;
    const { token, user_id } = req.query;

    try {
      // Retrieve the user based on id
      const user = await User.findById(user_id);

      // Compare given token and user_token
      if (user.password_token !== token) {
        return res.status(400).json({ message: "Token is not correct" });
      }

      // Compare between user token timer and now
      const tokenAge =
        (new Date() - new Date(user.password_token_timer)) / 1000 / 60; // in minutes
      if (tokenAge > 10) {
        return res
          .status(400)
          .json({ message: "Token has expired, reset again" });
      }

      // Hash the new password and save it
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;

      // Clear the token and timer after password reset
      user.password_token = undefined;
      user.password_token_timer = undefined;

      // Save the updated user
      await user.save();

      // Respond with a success message
      res.status(200).json({
        message: `${user.username}'s password has been reset successfully`,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },
];
