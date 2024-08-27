const users = require("../mongoDB/users");

exports.index = (req, res) => {
  res.json(users.users);
}; // get all | list all
exports.show = async (req, res) => {}; // show specifix user
exports.create = async (req, res) => {}; // create a new user
exports.edit = async (req, res) => {}; // edit a user
exports.update = async (req, res) => {}; // update a user
exports.delete = async (req, res) => {}; // delete a user
