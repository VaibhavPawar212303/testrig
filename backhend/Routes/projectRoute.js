const express = require("express");
const { getProject, createProject, deleteProject, updateProject } = require("../contoller/projectContoller");
const router = express.Router();


router.get("/", getProject);
router.post("/",createProject);
router.delete("/:id",deleteProject);
router.put("/:id",updateProject)

module.exports = router;
