var express = require("express");
var router = express.Router();

const sizesController = require("../controllers/sizesController");

router.get("/", sizesController.index); // list all

router.get("/new", sizesController.create); //create form

router.post("/", sizesController.create); //create a new sizes

router.get("/:id", sizesController.show); //show a single sizes

router.get("/:id/edit", sizesController.edit); //edit form

router.put("/:id", sizesController.update); // update a sizes

router.delete("/:id", sizesController.delete); // delete a sizes

module.exports = router;
