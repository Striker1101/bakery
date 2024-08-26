var express = require("express");
var router = express.Router();

const authController = require("../controllers/authController");

//default route
router.get("/", authController.index); // list all

router.get("/new", authController.create); //create form

router.post("/", authController.create); //create a new auth

router.get("/:id", authController.show); //show a single auth

router.get("/:id/edit", authController.edit); //edit form

router.put("/:id", authController.update); // update a auth

router.delete("/:id", authController.delete); // delete a auth

//custom routes
router.post("/register", authController.register); //register a new user

router.post("/login", authController.login); //register a new user

router.post("/forget_password", authController.ForgetPassword);

module.exports = router;
