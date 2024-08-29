const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  size_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Size",
  },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
