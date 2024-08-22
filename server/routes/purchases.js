var express = require("express");
var router = express.Router();

const purchasesController = require("../controllers/purchasesController");

router.get("/", purchasesController.index); // list all

router.get("/new", purchasesController.create); //create form

router.post("/", purchasesController.create); //create a new purchases

router.get("/:id", purchasesController.show); //show a single purchases

router.get("/:id/edit", purchasesController.edit); //edit form

router.put("/:id", purchasesController.update); // update a purchases

router.delete("/:id", purchasesController.delete); // delete a purchases

module.exports = router;
