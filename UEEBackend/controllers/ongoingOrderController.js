const OngoingOrder = require("../models/OngoingOrderModel"); // Import the OngoingOrder model
const DeliveredOrder = require("../models/deliveredModel")
const CancelledOrder = require("../models/cancelledModel")

const mongoose = require("mongoose");

const getAllOngoingOrder = async (req, res) => {
    const ongoingOrders = await OngoingOrder.find({}).sort({ createdAt: -1 });
  
    if (!ongoingOrders) {
      return res.status(405).json({ error: "No data found getAllOngoingOrder" });
    }
  
    res.status(200).json(ongoingOrders);
  };


  
// update a delivered
const updateOngoingOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such order ID" });
  }

  try {
    const updatedOngoingOrder = await OngoingOrder.findOneAndUpdate(
      { _id: id },
      { status: "Delivered" }, // Update the status to "Ongoing"
      { new: true }
    );

    if (!updatedOngoingOrder) {
      return res.status(400).json({ error: "No such order" });
    }

    // Log the updated order and deleted order
    console.log("Order marked as Delivered:", updatedOngoingOrder);
    const deletedOngoingOrder = await OngoingOrder.findOneAndDelete({ _id: id });
    console.log("Deleted OngoingOrder:", deletedOngoingOrder);


    // Create a new document in the "Ongoing" orders collection
    const deliveredOrder = new DeliveredOrder(updatedOngoingOrder.toObject());

    await deliveredOrder.save();

    res.status(200).json({ message: "Order updated successfully" }); // Change this line to respond with the updated order
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



  
// update a cancel order
const updateCanceledOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such order ID" });
  }

  try {
    const updateCanceledOrder = await OngoingOrder.findOneAndUpdate(
      { _id: id },
      { status: "Cancelled" }, // Update the status to "Ongoing"
      { new: true }
    );

    if (!updateCanceledOrder) {
      return res.status(400).json({ error: "No such order" });
    }

    // Log the updated order and deleted order
    console.log("Order marked as Delivered:", updateCanceledOrder);
    const deletedOngoingOrder = await OngoingOrder.findOneAndDelete({ _id: id });
    console.log("Deleted OngoingOrder:", deletedOngoingOrder);


    // Create a new document in the "Ongoing" orders collection
    const cancelOrder = new CancelledOrder(updateCanceledOrder.toObject());

    await cancelOrder.save();

    res.status(200).json({ message: "Order updated successfully" }); // Change this line to respond with the updated order
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


  module.exports = {
  getAllOngoingOrder,
  updateOngoingOrder,
  updateCanceledOrder
};
  