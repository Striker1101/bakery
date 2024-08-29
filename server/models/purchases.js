const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  deliver_method: {
    type: String,
    required: true,
    enum: ["door-to-door", "pick up station"],
  },
  track: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = Purchase;
