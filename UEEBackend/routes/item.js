const express = require("express");

const {
  createItem,

  getAllItems,

  getItemDetails,

  deleteItem,

  updateItem,
} = require("../controllers/itemController");

const router = express.Router();

//get all crops

router.get("/", getAllItems);

//get a single crop

router.get("/:id", getItemDetails);

//POST a new crop

router.post("/", createItem);

//DELETE a crop

router.delete("/:id", deleteItem);

//UPDATE a doctor

router.patch("/:id", updateItem);

module.exports = router;
