const City = require("../models/city");

module.exports = {
  new: newCity,
  create,
  index,
  show,
  // delete: deleteCity,
  // edit,
  // update,
};

function newCity(req, res) {
  res.render("cities/new", { title: "New City", user: req.user });
}

function create(req, res) {
  req.body.capital = !!req.body.capital; //converts checkbox to boolean

  //removes empty strings
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  const city = new City(req.body);

  city.save(function (err) {
    if (err)
      return res.render("cities/new", {
        title: "New City",
        user: req.user,
      }); // error handler
    res.redirect("/cities");
  });
}

function index(req, res) {
  City.find({}, function (err, cities) {
    res.render("cities/index", {
      title: "All Cities",
      cities,
      user: req.user,
    });
  });
}

function show(req, res) {
  City.findById(req.params.id, function (err, city) {
    res.render("cities/show", { title: "City Detail", city, user: req.user });
  });
}

function edit(req, res) {}

function update(req, res) {}

function deleteCity(req, res) {}
