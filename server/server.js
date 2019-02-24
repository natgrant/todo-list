const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.use(express.json());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "../public")));

server.use("/api/v1/todos", require("./routes/todos"));

module.exports = server;
