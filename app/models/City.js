import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  city: {
    type: String,
    default: "world",
    required: false,
  },
  from: {
    type: String,
    default: "From date not provided",
    required: false,
  },
  to: {
    type: String,
    default: "To date not provided",
    required: false,
  },
});

module.exports = mongoose.models.City || mongoose.model("City", citySchema);
