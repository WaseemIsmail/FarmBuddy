const express = require("express");

const {
   
    getAllCancelOrder,
   


} = require("../controllers/cancelController");

const router = express.Router();

//get all ongoing order
router.get("/", getAllCancelOrder);


module.exports = router;
