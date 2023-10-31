const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ongoingOrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  placedDate: {
    type: String,
    required: false,
  },
  warehouse: {
    type: String,
    required: true,
  },
  products: [
    {
      productName: String,
      category: String,
      weight: Number,
      price: Number,
    },
  ],
  subtotal: {
    type: Number,
    required: true,
  },
  deliveryFee: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending', // You can set an initial status here
  },
},

{ timestamps: true }
);

module.exports = mongoose.model("OngoingOrder", ongoingOrderSchema);
