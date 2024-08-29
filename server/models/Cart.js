const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
