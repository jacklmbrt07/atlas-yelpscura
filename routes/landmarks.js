const express = require("express");
const router = express.Router();
const landmarksCtrl = require("../controllers/landmarks");

router.post("/cities/:id/landmarks", landmarksCtrl.create);

module.exports = router;
