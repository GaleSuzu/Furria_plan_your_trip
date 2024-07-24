import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  // userId: {
  //   type: String,
  //   required: false,
  // },
  city: {
    type: String,
    default: "world",
    required: false,
  },
  from: {
    type: Date,
    /*  default: "From date not provided", */
    required: false,
  },
  to: {
    type: Date,
    /* default: "To date not provided", */
    required: false,
  },
});

module.exports = mongoose.models.City || mongoose.model("City", citySchema);
