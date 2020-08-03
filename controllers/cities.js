const City = require("../models/City");

module.exports = {
  new: newCity,
  create,
};

function newCity(req, res) {
  res.render("cities/new");
}

function create(req, res) {
  req.body.capital = !!req.body.capital; //converts checkbox to boolean

  const city = new City(req.body);

  city.save(function (err) {
    if (err) return res.render("cities/new"); // error handler
    console.log(city);
    res.redirect("/cities/new");
  });
}
