const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const warehousekSchema = new Schema(
  {
    inventoryName: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    warehouse: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("WarehouseK", warehousekSchema);
