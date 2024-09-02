var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");
const userControl = require("../middleware/userControl");
router.get("/", userControl, usersController.index); // list all

router.get("/all", usersController.getAll); //create form

router.put("/:id", userControl, usersController.update); // update a user

router.delete("/:id", userControl, usersController.delete); // delete a user

module.exports = router;
