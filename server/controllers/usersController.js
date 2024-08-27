const _users = require("../mongoDB/users");

exports.index = (req, res) => {
  try {
    const users = _users.users;
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving Users", error: error.message });
  }
}; // get all | list all

exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const users = _users.users;

    const user = users.find((item) => item.id == id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving product", error: error.message });
  }
}; // show specifix user

exports.create = async (req, res) => {
  try {
    const { username, email, password, currency } = req.body;

    // Validate input
    if (!username || !email || !password || !currency) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = {
      username,
      email,
      password,
      currency,
      password_token: "0000",
      password_token_timer: null,
    };

    //add new users
    _users.users.push(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
}; // create a new user
exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const users = _users.users;
    const user = users.find((item) => item.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user for editing",
      error: error.message,
    });
  }
}; // edit a user
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, currency } = req.body;

    // Validate input
    if (!username || !email || !password || !currency) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedUser = {
      username,
      email,
      password,
      currency,
      password_token: "0000",
      password_token_timer: null,
    };

    //find user index
    const userIndex = _users.users.findIndex((item) => item === id);

    _users.users[userIndex] = updatedUser;

    res.status(201).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
}; // update a user
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    let users = _users.users;
    const userIndex = users.findIndex((item) => item.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove the user from the users array
    users.splice(userIndex, 1);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
};
// delete a user
