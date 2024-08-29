const mongoose = require("mongoose");
const SizeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  min_unit: { type: Number, required: true },
  max_unit: { type: Number, required: true },
});

const Size = mongoose.model("Size", SizeSchema);

module.exports = Size;
