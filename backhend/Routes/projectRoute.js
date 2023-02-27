const express = require("express");
const {
  getProject,
  createProject,
  deleteProject,
  updateProject,
  getBuild,
  getTestpass,
  getTestCount,
  getRegressionCount,
  getVisualCount,
  getSmokeCount,
  getAPICount,
  getReport,
} = require("../contoller/projectControllerPostgreSQL");

const router = express.Router();

router.get("/", getProject);
router.post("/", createProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);
// router.get("/getproject/:id", getOneProject);
router.get("/getbuilds/:id", getBuild);
router.get("/getbuilds/testPass/:id", getTestpass);
router.get("/getTestCount/regression/:id",getRegressionCount);
router.get("/getTestCount/visual/:id",getVisualCount);
router.get("/getTestCount/smoke/:id",getSmokeCount);
router.get("/getTestCount/api/:id",getAPICount);
router.get("/getReport/:id",getReport);
module.exports = router;
