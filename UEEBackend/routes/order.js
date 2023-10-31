const express = require("express");

const {
    createOrder,

    getAllOrders,
  
    getOrderDetails,
  
    deleteOrder,
  
    updateOrder,
    
    

} = require("../controllers/orderController");

const router = express.Router();

//get all order

router.get("/", getAllOrders);

//get a single order

router.get("/:id", getOrderDetails);

//POST a new order

router.post("/", createOrder);

//DELETE a order

router.delete("/:id", deleteOrder);

//UPDATE a order

router.patch("/:id", updateOrder);


module.exports = router;
