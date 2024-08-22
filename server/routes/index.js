var express = require("express");
var router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", indexController.index); // list all

router.get("/new", indexController.create); //create form

router.post("/", indexController.create); //create a new index

router.get("/:id", indexController.show); //show a single index

router.get("/:id/edit", indexController.edit); //edit form

router.put("/:id", indexController.update); // update a index

router.delete("/:id", indexController.delete); // delete a index

module.exports = router;
