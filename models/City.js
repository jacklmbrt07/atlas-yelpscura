const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const landmarkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    category: {
      enum: [
        "Nature",
        "History",
        "Science",
        "Food",
        "Art",
        "Architecture",
        "Religion",
      ]
    },
  },
  { timestamps: true }
);

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    }, // add country enum later
    state: {
      type: String,
    },
    coordinates: [Number, Number],
    flag: String,
    website: String,
    capital: Boolean,
    landmarks: [landmarkSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("City", citySchema);
