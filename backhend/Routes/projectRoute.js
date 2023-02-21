const express = require("express");
const { getProject } = require("../contoller/projectControllerPostgreSQL");
const {
  createProject,
  deleteProject,
  updateProject,
  getOneProject,
  getReport,
} = require("../contoller/projectContoller");
const router = express.Router();

router.get("/", getProject);
router.post("/", createProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);
router.get("/getproject/:id", getOneProject);
router.get("/getreport/:id/:reportid", getReport);

module.exports = router;
