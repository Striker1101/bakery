const mongoose = require("mongoose");
const FinalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  purchase_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Purchase",
  },
});

const Final = mongoose.model("Final", FinalSchema);

module.exports = Final;
