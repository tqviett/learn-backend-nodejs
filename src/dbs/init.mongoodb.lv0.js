"use strict";

const mongoose = require("mongoose");
const connectString = `mongodb://localhost:27017/shopDEV`;

mongoose
  .connect(connectString)
  .then((_) => console.log(`Connect MongoDB success`))
  .catch((err) => console.log(`Error connecting`));

//dev
if (1 == 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;
