const City = require("../models/city");
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
  City.findById(req.params.city_id, function (err, city) {
    console.log(city.landmarks);
    city.landmarks.id(req.params.landmark_id).remove();
    city.save(function (err) {
      res.redirect(`/cities/${req.params.city_id}`);
    });
  });
}

function update(req, res) {}
