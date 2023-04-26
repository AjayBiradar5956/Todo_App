const express = require("express");
const router = express.Router();
const deleteController = require("../controller/delete_controller");

router.get('/', deleteController.delete);

module.exports = router;