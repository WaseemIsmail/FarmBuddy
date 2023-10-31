const express = require("express");

const {
  createInventory,

  getAllInventory,

  getInventoryDetails,

  deleteInventory,

  updateInventory,
} = require("../controllers/warehousehController");

const router = express.Router();

//get all crops

router.get("/", getAllInventory);

//get a single crop

router.get("/:id", getInventoryDetails);

//POST a new crop

router.post("/", createInventory);

//DELETE a crop

router.delete("/:id", deleteInventory);

//UPDATE a doctor

router.patch("/:id", updateInventory);

module.exports = router;
