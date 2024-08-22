var express = require("express");
var router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.index); // list all

router.get("/new", productController.create); //create form

router.post("/", productController.create); //create a new product

router.get("/:id", productController.show); //show a single product

router.get("/:id/edit", productController.edit); //edit form

router.put("/:id", productController.update); // update a product

router.delete("/:id", productController.delete); // delete a product

module.exports = router;
