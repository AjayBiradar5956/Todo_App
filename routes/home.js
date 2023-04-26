const express = require("express");
const router = express.Router();
const homeController = require("../controller/home_controller");

router.get('/', homeController.home);
router.use('/create-list', require("./create"));
router.use('/delete-list', require("./delete"));

module.exports = router;