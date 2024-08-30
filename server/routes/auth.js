var express = require("express");
var router = express.Router();

const authController = require("../controllers/authController");

//custom routes
router.post("/register", authController.register); //register a new user

router.post("/login", authController.login); //register a new user

router.post("/forget_password", authController.ForgetPassword);

router.post(
  "forget_password_confirmation",
  authController.forgetPasswordConfirmation
);
module.exports = router;
