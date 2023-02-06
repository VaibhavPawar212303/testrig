//import packages
const express = require("express");
const color = require("colors");
const dotenv = require("dotenv").config();
const fs = require("fs");
const cors = require('cors')

PORT = process.env.PORT || 8000;
//middleware
const { errorHandler } = require("../backhend/middleWare/errorMiddleware");
//app create
const app = express();
//app use
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api/project", require("../backhend/Routes/projectRoute"));
app.use(errorHandler);
//app listen on port
app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}`.cyan.underline);
});