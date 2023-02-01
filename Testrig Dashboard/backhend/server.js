//import packages
const express = require("express");
const color = require("colors");
const dotenv = require("dotenv").config();
const fs = require("fs");
const cors = require('cors')

PORT = process.env.PORT;
//middleware
const { errorHandler } = require("../Backhend/middleware/errorMiddleware");
//app create
const app = express();
//app use
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api/project", require("../Backhend/Routes/projectRoute"));
app.use(errorHandler);
//app listen on port
app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}`.cyan.underline);
});