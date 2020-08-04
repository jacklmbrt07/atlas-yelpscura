const router = require("express").Router();
const travelersCtrl = require("../controllers/travelers");

router.get("/travelers", travelersCtrl.index);

// traveler needs to add landmark

// travler delete landmark

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect("/auth/google");
// }

module.exports = router;
