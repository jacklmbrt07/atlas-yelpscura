const express = require("express");
const router = express.Router();
const landmarksCtrl = require("../controllers/landmarks");

router.post("/cities/:id/landmarks", landmarksCtrl.create);
router.delete("/cities/:city_id/landmarks/:landmark_id", landmarksCtrl.delete);
// router.put("/landmarks/:id/edit", landmarksCtrl.edit)
// router.put("/landmarks/:id", landmarksCtrl.update)

module.exports = router;
