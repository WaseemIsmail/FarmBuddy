
const CancelledOrder = require("../models/cancelledModel")

const mongoose = require("mongoose");

const getAllCancelOrder = async (req, res) => {
    const cancelOrders = await CancelledOrder.find({}).sort({ createdAt: -1 });
  
    if (!cancelOrders) {
      return res.status(405).json({ error: "No data found getAllOngoingOrder" });
    }
  
    res.status(200).json(cancelOrders);
  };

  module.exports = {
    getAllCancelOrder,
  };
    