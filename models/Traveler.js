const mongoose = require("mongoose");

const travelerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatarURL: String,
    // facts: [reviewSchema],
    googleId: String,
  },
  { timestamps: true }
);
