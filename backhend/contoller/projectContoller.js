const fsPromises = require("fs").promises;
const fs = require("fs");
const projectData = require("../project.json");

const getProject = (req, res) => {
  res.status(200).json({ projectData });
};

const createProject = (req, res) => {
  const { proName, proDesc } = req.body;
  if (!proName) {
    res.status(400);
    throw new Error("Please add the project name");
  } else if (!proDesc) {
    res.status(400);
    throw new Error("Please add the project details");
  } else {
    fsPromises.readFile("project.json", "utf-8").then((data) => {
      let json = JSON.parse(data);
      json.push({
        id: json.length + 1,
        projectName: `${proName}`,
        projectDesc: `${proDesc}`,
      });
      fsPromises
        .writeFile("project.json", JSON.stringify(json))
        .then(() => {
          res.status(200).json({
            id: json.length + 1 - 1,
            projectName: `${proName}`,
            projectDesc: `${proDesc}`,
          });
        })
        .catch((err) => {
          res.status(400);
          throw new Error("Append Failed: " + err);
        });
    });
  }
};

const updateProject = (req, res) => {
  const id = req.params.id;
  const { proName, proDesc } = req.body;

  fsPromises.readFile("project.json", "utf-8").then((data) => {
    let json = JSON.parse(data);
    var arrayLen = json.length;
    for (var i = 0; i < arrayLen; i++) {
      if (json[i].id == id) {
        json[i].projectName = `${proName}`;
        json[i].projectDesc = `${proDesc}`;
      }
    }

    fsPromises.writeFile("project.json", JSON.stringify(json)).then(() => {
      res.status(200).json(json[id - 1].proName);
    });
  });
};

const deleteProject = (req, res) => {
  const id = req.params.id;
  fsPromises.readFile("project.json", "utf-8").then((data) => {
    let json = JSON.parse(data);
    for (var i = 0; i < json.length; i++) {
      if (json[i].id == id) {
        json.splice(i, 1);
      }
    }
    fsPromises.writeFile("project.json", JSON.stringify(json)).then(() => {
      res.status(200).json({ message: `Project deleted ${id}` });
    });
  });
};

const getOneProject = (req, res) => {
  const id = req.params.id;

  fsPromises.readFile("project.json", "utf-8").then((data) => {
    let json = JSON.parse(data);
    var arrayLen = json.length;
    for (var i = 0; i < arrayLen; i++) {
      if (json[i].id == id) {
        res.json(json[i]);
      }
    }
  });
};

const getReport = (req, res) => {
  const id = req.params.id;
  const reportid = req.params.reportid;
  fsPromises.readFile("project.json", "utf-8").then((data) => {
    let json = JSON.parse(data);
    var arrayLen = json.length;
    for (var i = 0; i < arrayLen; i++) {
      if (json[i].id == id) {
        var arrayLen = json[i].report.length;
        for (var j = 0; j < arrayLen; j++) {
          if (json[i].report[j].report_id == reportid) {
            res.json(json[i].report[j]);
          }
        }
      }
    }
  });
};

module.exports = {
  getProject,
  createProject,
  deleteProject,
  updateProject,
  getOneProject,
  getReport,
};
