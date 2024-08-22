var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.index); // list all

router.get("/new", usersController.create); //create form

router.post("/", usersController.create); //create a new user

router.get("/:id", usersController.show); //show a single user

router.get("/:id/edit", usersController.edit); //edit form

router.put("/:id", usersController.update); // update a user

router.delete("/:id", usersController.delete); // delete a user

module.exports = router;
