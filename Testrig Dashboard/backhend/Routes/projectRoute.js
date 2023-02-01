const express = require("express");
const { getProject } = require("../contoller/projectContoller");
const router = express.Router();
router.get("/", getProject);

module.exports = router;
