const Traveler = require("../models/Traveler");

module.exports = {
  index,
};

function index(req, res) {
  Traveler.find({}, function (err, travelers) {
    res.render("travelers/index", {
      travlers,
      user: req.user,
    });
  });
}
