import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  place: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
