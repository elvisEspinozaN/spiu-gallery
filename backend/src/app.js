const express = require("express");
const morgan = require("morgan");

const healthRouter = require("./routes/health");

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/health", healthRouter);

module.exports = app;
