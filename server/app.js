var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passport = require("passport");
require("./passport");
const connectDB = require("./database");

var app = express();

//connect to MongoDB
connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));
app.use(passport.initialize()); //initialize passport middleware

//all routes
app.use(
  "/api/users",
  passport.authenticate("jwt", { session: false }), // protect route from unauthenticated users
  require("./routes/users")
);
app.use("/api/auth", require("./routes/auth"));
app.use("/api/carts", require("./routes/carts"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/final", require("./routes/final"));
app.use("/api/products", require("./routes/products"));
app.use("/api/purchases", require("./routes/purchases"));
app.use("/api/sizes", require("./routes/sizes"));
app.use(
  "/fg",
  require("./controllers/authController").forgetPasswordConfirmation
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
