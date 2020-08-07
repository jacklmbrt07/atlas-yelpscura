const express = require("express");
const router = express.Router();
const citiesCtrl = require("../controllers/cities");

router.post("/", citiesCtrl.create);
router.get("/", citiesCtrl.index);
router.get("/new", citiesCtrl.new);
router.get("/:id", citiesCtrl.show);
// router.get("/cities/:id/edit", citiesCtrl.edit);
// router.put("/cities/:id", citiesCtrl.update);
// router.delete("/cities/:id", citiesCtrl.delete);

module.exports = router;
