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
    img: String, //user enters image src link
    review: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
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
    coordinates: [Number, Number],
    flag: String,
    website: String,
    capital: Boolean,
    landmarks: [landmarkSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("City", citySchema);

// is this required?
// module.exports = mongoose.model('Landmark', landmarkSchema)
