const Item = require("../models/itemModel");

const mongoose = require("mongoose");

//get all crops

const getAllItems = async (req, res) => {
  const items = await Item.find({}).sort({ createdAt: -1 });

  if (!items) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(items);
};

//get a single crop

const getItemDetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No data found" });
  }

  const item = await Item.findById(id);

  if (!item) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(item);
};

//create new crop

const createItem = async (req, res) => {
  const { itemName, pricePer, quantity, warehouseName, description, category } =
    req.body;

  //add doc to db

  try {
    const item = await Item.create({
      itemName,
      pricePer,
      quantity,
      warehouseName,
      description,
      category,
    });

    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a crop

const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Crop" });
  }

  const item = await Item.findOneAndDelete({ _id: id });

  if (!item) {
    return res.status(400).json({ error: "No such crop" });
  }

  res.status(200).json(item);
};

//update a doctor

const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such crop" });
  }

  const item = await Item.findOneAndUpdate(
    { _id: id },

    {
      ...req.body,
    }
  );

  if (!item) {
    return res.status(400).json({ error: "No such crop" });
  }

  res.status(200).json(item);
};

module.exports = {
  createItem,

  getAllItems,

  getItemDetails,

  deleteItem,

  updateItem,
};
