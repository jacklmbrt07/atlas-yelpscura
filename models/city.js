
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
      type: String,
      enum: [
        "Nature",
        "History",
        "Science",
        "Food",
        "Art",
        "Architecture",
        "Religious",
      ]
    },
    img: String,
    about: String,
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
    }, 
    state: {
      type: String,
    },
    img: String, //user enters image src link
    coordinates: [Number, Number],
    website: String,
    capital: Boolean,
    population: Number,
    landmarks: [landmarkSchema],
    img: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("City", citySchema);

// is this required?
// module.exports = mongoose.model('Landmark', landmarkSchema)
