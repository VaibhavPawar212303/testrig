const postgres = require("postgres");
require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: "require" });

async function getProject(req, res) {
  const result = await sql`SELECT * FROM projects ORDER BY id ASC`;
  res.status(200).json({
    result,
  });
}

async function createProject(req, res) {
  const { proName, proDesc } = req.body;
  if (!proName) {
    res.status(400).json({
      message: "Please add the project name",
    });
  } else if (!proDesc) {
    res.status(400).json({
      message: "Please add the project details",
    });
  } else {
    await sql`
    INSERT INTO projects (pro_name, pro_desc)
       VALUES (${proName}, ${proDesc});`;
    res.status(200).json({
      message: "Your project created successfully",
    });
  }
}

async function updateProject(req, res) {
  const id = req.params.id;
  const { proName, proDesc } = req.body;
  await sql`
  UPDATE projects
  SET pro_name = ${proName}, pro_desc=${proDesc}
  WHERE id = ${id};`;
  res.status(200).json({
    message: "Your project updated successfully",
  });
}

async function deleteProject(req, res) {
  const id = req.params.id;
  await sql`DELETE FROM projects WHERE id=${id};`;
  res.status(200).json({
    message: "Your project deleted successfully",
  });
}

module.exports = {
  getProject,
  createProject,
  deleteProject,
  updateProject,
};
