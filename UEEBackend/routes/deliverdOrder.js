const express = require("express");

const {
   
    getAllDeliveredOrder,
   


} = require("../controllers/deliverdController");

const router = express.Router();

//get all ongoing order
router.get("/", getAllDeliveredOrder);


module.exports = router;
