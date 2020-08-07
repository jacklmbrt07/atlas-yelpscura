const mongoose = require("mongoose");

const travelerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Traveler", travelerSchema);
