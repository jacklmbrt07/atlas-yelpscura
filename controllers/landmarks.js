const City = require("../models/city");

module.exports = {
  create,
  delete: deleteLandmark,
  edit,
  update
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
    city.landmarks.id(req.params.landmark_id).remove();
    city.save(function (err) {
      res.redirect(`/cities/${req.params.city_id}`);
    });
  });
}

function edit(req, res) {
  City.findOne({ "landmarks._id": req.params.id }, function (err, city) {
    const landmark = city.landmarks.id(req.params.id);
    res.render("landmarks/edit", {
      user: req.user,
      landmark,
      title: "Edit Landmark",
    });
  });
}

function update(req, res) {
  City.findOne({ "landmarks._id": req.params.id }, function (err, city) {
    const landmark = city.landmarks.id(req.params.id);
    landmark.overwrite(req.body);
    city.save(function (err) {
      console.log(landmark)

      res.redirect(`/cities/${city._id}`);
    });
  });
}
