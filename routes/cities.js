const express = require("express");
const router = express.Router();
const citiesCtrl = require('../controllers/cities');

router.get('/new', citiesCtrl.new)
router.post('/', citiesCtrl.create)

module.exports = router;
