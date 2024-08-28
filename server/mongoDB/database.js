const mongoose = require("mongoose");
require("dotenv").config();
const _environment = require("../Helpers/config");

const environment = _environment.environment;

mongoose
  .connect(environment.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

module.exports = mongoose;
