module.exports = function userControl(req, res, next) {
  const { id } = req.params;
  // if id !== user.id  then unauthorized else next

  const user = req.user;
  console.log(user);

  if (id != user.id) {
    return res.status(403).json({ message: " forbidden access" });
  } else {
    next();
  }
};
