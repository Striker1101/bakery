const mongoose = require("mongoose");
require("dotenv").config();
const _environment = require("./Helpers/config");

const environment = _environment.environment;

const connectDB = async () => {
  try {
    await mongoose.connect(environment.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
