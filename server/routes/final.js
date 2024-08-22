var express = require("express");
var router = express.Router();

const finalController = require("../controllers/finalController");

router.get("/", finalController.index); // list all

router.get("/new", finalController.create); //create form

router.post("/", finalController.create); //create a new final

router.get("/:id", finalController.show); //show a single final

router.get("/:id/edit", finalController.edit); //edit form

router.put("/:id", finalController.update); // update a final

router.delete("/:id", finalController.delete); // delete a final

module.exports = router;
