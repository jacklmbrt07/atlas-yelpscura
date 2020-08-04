const City = require("../models/City");
// const Landmark = require("../models/city");

module.exports = {
  create,
  delete: deleteLandmark,
  // update
};

function create(req, res) {
  City.findById(req.params.id, function (err, city) {
    city.landmarks.push(req.body);
    city.save(function (err) {
      res.redirect(`/cities/${city._id}`);
    });
  });
}

function deleteLandmark(req, res) {
  City.find({ landmark: req.params.landmarkId }, function (err, landmark) {
    console.log(landmark);
    res.redirect(`/cities/${req.params.cityId}`);
  });
}

function update(req, res) {

}