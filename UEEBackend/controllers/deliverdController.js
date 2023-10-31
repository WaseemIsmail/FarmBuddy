
const DeliveredOrder = require("../models/deliveredModel")

const mongoose = require("mongoose");

const getAllDeliveredOrder = async (req, res) => {
    const deliveredOrders = await DeliveredOrder.find({}).sort({ createdAt: -1 });
  
    if (!deliveredOrders) {
      return res.status(405).json({ error: "No data found getAllOngoingOrder" });
    }
  
    res.status(200).json(deliveredOrders);
  };

  module.exports = {
    getAllDeliveredOrder,
  };
    