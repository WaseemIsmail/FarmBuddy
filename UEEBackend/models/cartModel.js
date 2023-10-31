const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartItems = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    warehouseName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },

  { _id: 0 }
);

const cartSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },

    items: [cartItems],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
