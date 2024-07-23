import mongoose from "mongoose";

const costSchema = new mongoose.Schema({
  category: {
    type: String,
    default: "none",
    required: false,
  },
  text: {
    type: String,
    default: "Expense",
    required: false,
  },
  cost: {
    type: Number,
    default: 0,
    required: false,
  },
});

module.exports = mongoose.models.Cost || mongoose.model("Cost", costSchema);
