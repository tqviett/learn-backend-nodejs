const compression = require("compression");
const express = require("express");
const app = express();
const { default: helmet } = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db 
require("./dbs/init.mongoodb");
const { checkOverload } = require("./helpers/check.connect");
//checkOverload();
//init routes
app.get("/", (req, res, next) => {
  const strCompression = "hello compress";
  return res.status(200).json({
    message: "welcome!",
    metaldata: strCompression.repeat(10000),
  });
});

//handle error

module.exports = app;
