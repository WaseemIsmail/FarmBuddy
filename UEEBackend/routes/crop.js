const express = require("express");
const {
  createCrop,
  getAllCrops,
  getCropDetails,
  deleteCrop,
  updateCrop,
} = require("../controllers/cropController");

const router = express.Router();

//get all crops
router.get("/", getAllCrops);

//get a single crop
router.get("/:id", getCropDetails);

//POST a new crop
router.post("/", createCrop);

//DELETE a crop
router.delete("/:id", deleteCrop);

//UPDATE a doctor
router.patch("/:id", updateCrop);

module.exports = router;
