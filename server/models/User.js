const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  currency: { type: String, required: true },
  password_token: { type: String, default: "0000" },
  password_token_timer: { type: Date, default: Date.now },
  role: { type: String, default: "customer" },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
