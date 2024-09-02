const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// Get data for the authenticated user
exports.index = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming req.user contains the authenticated user's data
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving user data", error: error.message });
  }
};

// Get all users
exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving users", error: error.message });
  }
};

// Update a user with validation
exports.update = [
  // Validate that the username is provided
  check("username").not().isEmpty().withMessage("Username is required"),

  async (req, res) => {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = req.user.id; // Assuming req.user contains the authenticated user's data
      const { username } = req.body;

      // Update only the username
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { username },
        { new: true } // Return the updated document
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        message: "Username updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error updating username",
        error: error.message,
      });
    }
  },
];

// Delete a user
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
};
