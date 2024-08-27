const _carts = require("../mongoDB/carts");

exports.index = async (req, res) => {
  try {
    const cart = _carts.carts;
    return res.status(200).json(cart);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving Carts", error: error.message });
  }
}; // get all | list all
exports.show = async (req, res) => {}; // show specifix cart
exports.create = async (req, res) => {}; // create a new cart
exports.edit = async (req, res) => {}; // edit a cart
exports.update = async (req, res) => {}; // update a cart
exports.delete = async (req, res) => {}; // delete a cart
