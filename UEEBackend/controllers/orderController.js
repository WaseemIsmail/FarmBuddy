const Order = require("../models/orderModel");
const OngoingOrder = require("../models/OngoingOrderModel"); // Import the OngoingOrder model

const mongoose = require("mongoose");

//get all orders
const getAllOrders = async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 });

  if (!orders) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(orders);
};

//get a single crop
const getOrderDetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No data found" });
  }

  const order = await Order.findById(id);

  if (!order) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(order);
};


//create new order
const createOrder = async (req, res) => {
  const { orderId, customerName, address, phoneNumber, placedDate, warehouse, products, subtotal,deliveryFee,total, status} =
    req.body;

  //add order to db

  try {
    const order = await Order.create({
        orderId, 
        customerName,
        address, 
        phoneNumber, 
        placedDate, 
        warehouse, 
        products, 
        subtotal,
        deliveryFee,
        total, 
        status,
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//delete a order
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Order" });
  }

  const order = await Order.findOneAndDelete({ _id: id });

  if (!order) {
    return res.status(400).json({ error: "No such order" });
  }

  res.status(200).json(order);
};


// update a order
const updateOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such order ID" });
  }

  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: id },
      { status: "Ongoing" }, // Update the status to "Ongoing"
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(400).json({ error: "No such order" });
    }

    // Log the updated order and deleted order
    console.log("Order marked as Ongoing:", updatedOrder);
    const deletedOrder = await Order.findOneAndDelete({ _id: id });
    console.log("Deleted Order:", deletedOrder);


    // Create a new document in the "Ongoing" orders collection
    const ongoingOrder = new OngoingOrder(updatedOrder.toObject());

    await ongoingOrder.save();

    res.status(200).json({ message: "Order updated successfully" }); // Change this line to respond with the updated order
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
    createOrder,

  getAllOrders,

  getOrderDetails,

  deleteOrder,

  updateOrder,

};
