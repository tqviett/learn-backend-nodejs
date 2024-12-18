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
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//init db
require("./dbs/init.mongoodb");
const { checkOverload } = require("./helpers/check.connect");
//checkOverload();

//init routes
app.use("", require("./routes"));

//handle error

module.exports = app;
