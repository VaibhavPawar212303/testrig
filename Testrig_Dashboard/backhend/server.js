//import the packages
const express = require('express');
const dotenv  = require('dotenv').config;
const colors  =  require('colors');

//create the port 
const PORT = process.env.PORT || 8000

//create the app
const app  =  express();

//start the server 
app.listen(PORT,()=>{
  console.log(`APP IS RUNNING ON PORT ${PORT}`.red.underline)
})

