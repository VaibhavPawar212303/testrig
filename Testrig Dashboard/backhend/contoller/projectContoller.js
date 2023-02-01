const fsPromises = require("fs").promises;
const fs = require("fs");
const projectData = require("../projectData/project.json");

const getProject = (req, res) => {
  res.status(200).json({ projectData });
};

const createProject = (req, res) => {
  const { proName, proDetails } = req.body;
  if (!proName) {
    res.status(400);
    throw new Error("Please add the project name");
  } else if (!proDetails) {
    res.status(400);
    throw new Error("Please add the project details");
  } else {
    fsPromises
      .readFile(
        "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
        "utf-8"
      )
      .then((data) => {
        let json = JSON.parse(data);
        json.push({
          newCar: {
            id: json.length + 1,
            carName: `${proName}`,
            carDetails: `${proDetails}`,
          },
        });
        fsPromises
          .writeFile(
            "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
            JSON.stringify(json)
          )
          .then(() => {
            res.status(200).json({
              newCar: {
                id: json.length + 1 - 1,
                carName: `${proName}`,
                carDetails: `${proDetails}`,
              },
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
  const { proName, proDetails } = req.body;

  fsPromises
    .readFile(
      "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
      "utf-8"
    )
    .then((data) => {
      let json = JSON.parse(data);
      var arrayLen = json.length;
      for (var i = 0; i < arrayLen; i++) {
        if (json[i].newCar.id == id) {
          json[i].newCar.carName = `${proName}`;
          json[i].newCar.carDetails = `${proDetails}`;
        }
      }

      fsPromises
        .writeFile(
          "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
          JSON.stringify(json)
        )
        .then(() => {
          res.status(200).json(json[id - 1].proName);
        });
    });
};

const deleteProject = (req, res) => {
  const id = req.params.id;
  fsPromises
    .readFile(
      "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
      "utf-8"
    )
    .then((data) => {
      let json = JSON.parse(data);
      for (var i = 0; i < json.length; i++) {
        if (json[i].newCar.id == id) {
          json.splice(i, 1);
        }
      }
      fsPromises
        .writeFile(
          "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
          JSON.stringify(json)
        )
        .then(() => {
          res.status(200).json({ message: `Project deleted ${id}` });
        });
    });
};

module.exports = {
 getProject
};
