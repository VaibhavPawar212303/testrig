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

module.exports = {
  getProject,
};
