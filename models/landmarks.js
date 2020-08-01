const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const landmarkSchema = new Schema({
  name: String,
  location: String,
  img: String,
  coordinates: [Number, Number],
  type: {
    enum: ["Nature", "Food", "Religious", "Art", "Science", "History", "Architecture"],
  },
  // avgReview: [reviewSchema]
});

module.exports = mongoose.model("Landmark", landmarkSchema);
