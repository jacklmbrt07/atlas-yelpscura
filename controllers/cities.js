const City = require("../models/City");

module.exports = {
  new: newCity,
  create,
  index,
  show,
};

function newCity(req, res) {
  res.render("cities/new", { title: "New City" });
}

function create(req, res) {
  req.body.capital = !!req.body.capital; //converts checkbox to boolean

  //removes empty strings
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  const city = new City(req.body);

  city.save(function (err) {
    if (err) return res.render("cities/new"); // error handler
    console.log(city);
    res.redirect("/cities");
  });
}

function index(req, res) {
  City.find({}, function (err, cities) {
    res.render("cities/index", {
      title: "All Cities",
      cities,
    });
  });
}

function show(req, res) {
  City.findById(req.params.id, function (err, city) {
    res.render("cities/show", { title: "City Detail", city });
  });
}