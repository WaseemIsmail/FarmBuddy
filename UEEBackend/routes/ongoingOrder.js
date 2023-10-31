const express = require("express");

const {
    updateOngoingOrder,
    getAllOngoingOrder,
    updateCanceledOrder,


} = require("../controllers/ongoingOrderController");

const router = express.Router();

//get all ongoing order
router.get("/", getAllOngoingOrder);

//UPDATE a order

router.patch("/:id", updateOngoingOrder);

//UPDATE a cancel

router.patch("/cancel/:id", updateCanceledOrder);

module.exports = router;
