const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema({
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
  // landmarks: [landmarkSchema]
});

module.exports = mongoose.model("City", citySchema);
