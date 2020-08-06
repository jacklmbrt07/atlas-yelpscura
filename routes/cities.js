const express = require("express");
const router = express.Router();
const citiesCtrl = require("../controllers/cities");

router.post("/", citiesCtrl.create);
router.get("/", citiesCtrl.index);
router.get("/new", citiesCtrl.new);
router.get("/:id", citiesCtrl.show);

module.exports = router;
