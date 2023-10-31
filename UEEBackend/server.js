require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const cropRoutes = require("./routes/crop");
const itemRoutes = require("./routes/item");
const cartRoutes = require("./routes/cart");
const inventoryRoutes = require("./routes/inventory");
const orderRoutes = require("./routes/order");
const ongoingOrder = require("./routes/ongoingOrder");
const cancelOrder = require("./routes/cancelOrder");
const deliverdOrder = require("./routes/deliverdOrder");

// express app
const app = express();
app.use(cors());
// middleware
app.use(express.json({ limit: "5mb" }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/inventory", inventoryRoutes);

app.use("/api/order", orderRoutes);
app.use("/api/ongoingOrder", ongoingOrder);
app.use("/api/cancelledOrders", cancelOrder);
app.use("/api/deliveredOrder", deliverdOrder);
// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
