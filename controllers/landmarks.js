const City = require("../models/City");

module.exports = {
  create,
};

function create(req, res) {
  City.findById(req.params.id, function (err, city) {
    city.landmarks.push(req.body);
    city.save(function (err) {
      res.redirect(`/cities/${city._id}`);
    });
  });
}
