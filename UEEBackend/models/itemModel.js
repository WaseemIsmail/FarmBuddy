const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },

    pricePer: {
      type: Number,
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

    description: {
      type: String,
      required: false,
    },

    category: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
