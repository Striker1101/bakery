exports.users = [
  {
    id: 0,
    username: "ethel",
    email: "ethel@mail.com",
    password: "password",
    created_at: "2024/04/30",
    updated_at: "2024/04/30",
    currency: "USD",
    password_token: "0000",
    password_token_timer: null,
    role: "admin",
  },
  {
    id: 1,
    username: "mary",
    email: "mary@mail.com",
    password: "password",
    created_at: "2024/04/30",
    updated_at: "2024/04/30",
    currency: "NGN",
    password_token: "0000",
    password_token_timer: null,
    role: "customer",
  },
];

// const mongoose = require("../database");

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now },
//   currency: { type: String, required: true },
//   password_token: { type: String, default: "0000" },
//   password_token_timer: { type: Date, default: null },
//   role: { type: String, enum: ["admin", "customer"], default: "customer" },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
