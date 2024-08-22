var express = require("express");
var router = express.Router();

const cartsController = require("../controllers/cartsController");

router.get("/", cartsController.index); // list all

router.get("/new", cartsController.create); //create form

router.post("/", cartsController.create); //create a new cart

router.get("/:id", cartsController.show); //show a single cart

router.get("/:id/edit", cartsController.edit); //edit form

router.put("/:id", cartsController.update); // update a cart

router.delete("/:id", cartsController.delete); // delete a cart

module.exports = router;
