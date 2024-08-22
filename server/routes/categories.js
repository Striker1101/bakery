var express = require("express");
var router = express.Router();

const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.index); // list all

router.get("/new", categoriesController.create); //create form

router.post("/", categoriesController.create); //create a new categories

router.get("/:id", categoriesController.show); //show a single categories

router.get("/:id/edit", categoriesController.edit); //edit form

router.put("/:id", categoriesController.update); // update a categories

router.delete("/:id", categoriesController.delete); // delete a categories

module.exports = router;
