const { check, validationResult } = require("express-validator");
const Size = require("../models/Size");
const User = require("../models/User");

// Get all sizes (for all users)
exports.getAll = async (req, res) => {
  try {
    const sizes = await Size.find();

    if (!sizes.length) {
      return res.status(404).json({ message: "No sizes found" });
    }

    return res.status(200).json(sizes);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving sizes", error: error.message });
  }
};

// Get sizes for a specific user
exports.index = async (req, res) => {
  try {
    const { userId } = req.user; // Assuming userId is stored in req.user after authentication

    // Fetch user's associated sizes (you would replace this with your specific logic)
    const user = await User.findById(userId).populate("sizes"); // Assuming `sizes` is an array in the User model
    if (!user || !user.sizes.length) {
      return res.status(404).json({ message: "No sizes found for this user" });
    }

    return res.status(200).json(user.sizes);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving sizes", error: error.message });
  }
};

// Show a specific size
exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const size = await Size.findById(id);

    if (!size) {
      return res.status(404).json({ message: "Size not found" });
    }

    return res.status(200).json(size);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving size", error: error.message });
  }
};

// Create a new size
exports.create = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("min_unit").isNumeric().withMessage("Min unit must be a number"),
  check("max_unit").isNumeric().withMessage("Max unit must be a number"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, min_unit, max_unit } = req.body;

      const newSize = new Size({
        name,
        min_unit,
        max_unit,
      });

      await newSize.save();
      return res.status(201).json(newSize);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating size", error: error.message });
    }
  },
];

// Edit a size (return the size data for editing)
exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const size = await Size.findById(id);

    if (!size) {
      return res.status(404).json({ message: "Size not found" });
    }

    return res.status(200).json(size);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving size for editing",
      error: error.message,
    });
  }
};

// Update a size
exports.update = [
  check("name").optional().not().isEmpty().withMessage("Name is required"),
  check("min_unit")
    .optional()
    .isNumeric()
    .withMessage("Min unit must be a number"),
  check("max_unit")
    .optional()
    .isNumeric()
    .withMessage("Max unit must be a number"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.params;
      const { name, min_unit, max_unit } = req.body;

      const updatedSize = await Size.findByIdAndUpdate(
        id,
        { name, min_unit, max_unit },
        { new: true, runValidators: true }
      );

      if (!updatedSize) {
        return res.status(404).json({ message: "Size not found" });
      }

      return res.status(200).json(updatedSize);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error updating size", error: error.message });
    }
  },
];

// Delete a size
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSize = await Size.findByIdAndDelete(id);

    if (!deletedSize) {
      return res.status(404).json({ message: "Size not found" });
    }

    return res.status(200).json({ message: "Size deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting size", error: error.message });
  }
};
