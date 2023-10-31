const Inventory = require("../models/inventoryModel");

const mongoose = require("mongoose");

//get all crops

const getAllInventory = async (req, res) => {
  const inventorys = await Inventory.find({}).sort({ createdAt: -1 });

  if (!inventorys) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(inventorys);
};

//get a single crop

const getInventoryDetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No data found" });
  }

  const inventory = await Inventory.findById(id);

  if (!inventory) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(inventory);
};

//create new crop

const createInventory = async (req, res) => {
  const { inventoryName, price, quantity, warehouse } = req.body;

  //add doc to db

  try {
    const inventory = await Inventory.create({
      inventoryName,
      price,
      quantity,
      warehouse,
    });

    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a crop

const deleteInventory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Crop" });
  }

  const inventory = await Item.findOneAndDelete({ _id: id });

  if (!inventory) {
    return res.status(400).json({ error: "No such crop" });
  }

  res.status(200).json(inventory);
};

//update a doctor

const updateInventory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such crop" });
  }

  const inventory = await Inventory.findOneAndUpdate(
    { _id: id },

    {
      ...req.body,
    }
  );

  if (!inventory) {
    return res.status(400).json({ error: "No such crop" });
  }

  res.status(200).json(inventory);
};

module.exports = {
  createInventory,

  getAllInventory,

  getInventoryDetails,

  deleteInventory,

  updateInventory,
};
