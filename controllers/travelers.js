const Traveler = require("../models/traveler");

module.exports = {
  index,
};

function index(req, res) {
  Traveler.find({}, function (err, travelers) {
    res.render("travelers/index", {
      travelers,
      user: req.user,
    });
  });
}
