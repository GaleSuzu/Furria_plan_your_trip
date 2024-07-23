import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
