const express = require("express");
const {
  addToCart,
  getCartItems,
  // getCartDetails,
  deleteCart,
  updateCart,
} = require("../controllers/cartController");

const router = express.Router();

router.post("/all", getCartItems);

// router.get("/:id", getCropDetails);

router.post("/", addToCart);

router.delete("/:id", deleteCart);

router.patch("/:id", updateCart);

module.exports = router;
