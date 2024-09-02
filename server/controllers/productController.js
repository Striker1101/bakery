const { check, validationResult } = require("express-validator");
const Product = require("../models/product");

// List all products
exports.index = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category_id")
      .populate("size_id");
    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving products", error: error.message });
  }
};

// Show a specific product
exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate("category_id")
      .populate("size_id");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving product", error: error.message });
  }
};

// Create a new product
exports.create = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("category_id").isMongoId().withMessage("Valid category ID is required"),
  check("size_id").isMongoId().withMessage("Valid size ID is required"),
  check("price").isNumeric().withMessage("Price must be a number"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, category_id, size_id, price } = req.body;

      const newProduct = new Product({
        name,
        category_id,
        size_id,
        price,
      });

      await newProduct.save();
      return res.status(201).json(newProduct);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating product", error: error.message });
    }
  },
];

// Edit a product (return the product data for editing)
exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate("category_id")
      .populate("size_id");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving product for editing",
      error: error.message,
    });
  }
};

// Update a product
exports.update = [
  check("name").optional().not().isEmpty().withMessage("Name is required"),
  check("category_id")
    .optional()
    .isMongoId()
    .withMessage("Valid category ID is required"),
  check("size_id")
    .optional()
    .isMongoId()
    .withMessage("Valid size ID is required"),
  check("price").optional().isNumeric().withMessage("Price must be a number"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.params;
      const { name, category_id, size_id, price } = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, category_id, size_id, price },
        { new: true, runValidators: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error updating product", error: error.message });
    }
  },
];

// Delete a product
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};
