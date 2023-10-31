const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const cropSchema = new Schema(
  {
    vegetable: {
      type: String,
      required: true,
    },
    warehouse: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },

    gardner: {
      type: String,
      required: true,
    },

    stage: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", cropSchema);
