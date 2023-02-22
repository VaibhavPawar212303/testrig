const express = require("express");
const {
  getProject,
  createProject,
  deleteProject,
  updateProject,
} = require("../contoller/projectControllerPostgreSQL");

const router = express.Router();

router.get("/", getProject);
router.post("/", createProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);
// router.get("/getproject/:id", getOneProject);
// router.get("/getreport/:id/:reportid", getReport);

module.exports = router;
