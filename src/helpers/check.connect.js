"use strict";

const { default: mongoose } = require("mongoose");
const _SECONDS = 5000;
const os = require("os");
const process = require("process");

//count connections
const countConnect = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Num Connections: ${numConnections}`);
};

//check overload connections
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example: maximum number connections based on number of cores
    const maxConnections = numCores * 5;

    console.log(` active connections: ${numConnection}`);

    console.log(`memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log(` connection overload detected`);
    }
  }, _SECONDS); //Monitor every 5s
};
module.exports = {
  countConnect,
  checkOverload,
};
