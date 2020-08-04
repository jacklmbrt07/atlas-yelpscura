module.exports = {
  index,
};

function index(req, res) {
  res.render("index", { title: "home", user: req.user });
}
