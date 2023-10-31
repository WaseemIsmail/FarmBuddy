const Cart = require("../models/cartModel");

const mongoose = require("mongoose");

const getCartItems = async (req, res) => {
  const { user } = req.body;
  const carts = await Cart.findOne({ user: user });

  if (!carts) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(carts);
};

// const getItemDetails = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No data found" });
//   }

//   const item = await Cart.findById(id);

//   if (!item) {
//     return res.status(404).json({ error: "No data found" });
//   }

//   res.status(200).json(item);
// };

const addToCart = async (req, res) => {
  const { user, items } = req.body;

  try {
    const existingCart = await Cart.findOne({ user: user });

    if (existingCart) {
      existingCart.items.push(items);
      await existingCart.save();
      res.status(200).json(existingCart);
    } else {
      const newCart = await Cart.create({
        user,
        items: items,
      });
      res.status(200).json(newCart);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { user: user },
      { $pull: { items: { itemName: id } } },
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ error: "No such item" });
    }

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }

  const cart = await Cart.findOneAndUpdate(
    { _id: id },

    {
      ...req.body,
    },
    {
      new: true,
    }
  );

  if (!cart) {
    return res.status(400).json({ error: "No such item" });
  }

  res.status(200).json(item);
};

module.exports = {
  addToCart,

  getCartItems,

  // getCartDetails,

  deleteCart,

  updateCart,
};
