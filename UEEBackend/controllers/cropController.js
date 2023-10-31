const Crop = require("../models/cropModel");
const mongoose = require("mongoose");

//get all crops
const getAllCrops = async (req, res) => {
  const crops = await Crop.find({}).sort({ createdAt: -1 });

  if (!crops) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(crops);
};

//get a single crop
const getCropDetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No data found" });
  }

  const crop = await Crop.findById(id);

  if (!crop) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(crop);
};

//create new crop
const createCrop = async (req, res) => {
  const { vegetable, warehouse, date, area, gardner, stage } = req.body;
  //add doc to db
  try {
    const crop = await Crop.create({
      vegetable,
      warehouse,
      date,
      area,
      gardner,
      stage,
    });
    res.status(200).json(crop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a crop
const deleteCrop = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Crop" });
  }

  const crop = await Crop.findOneAndDelete({ _id: id });

  if (!crop) {
    return res.status(400).json({ error: "No such crop" });
  }

  res.status(200).json(crop);
};

//update a doctor
const updateCrop = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such crop" });
  }

  const crop = await Crop.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!crop) {
    return res.status(400).json({ error: "No such crop" });
  }

  res.status(200).json(crop);
};

module.exports = {
  createCrop,
  getAllCrops,
  getCropDetails,
  deleteCrop,
  updateCrop,
};
