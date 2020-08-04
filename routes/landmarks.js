const express = require("express");
const router = express.Router();
const landmarksCtrl = require("../controllers/landmarks");

router.post("/cities/:id/landmarks", landmarksCtrl.create);
router.delete("/cities/:id/landmarks/:id", landmarksCtrl.delete);
// router.put("/cities/:id/landmarks/:id", landmarksCtrl.update)

module.exports = router;
