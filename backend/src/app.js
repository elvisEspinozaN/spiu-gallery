// sets up middleware/routes
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const healthRouter = require("./routes/health");
const artworkRouter = require("./routes/artwork");

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/health", healthRouter);
app.use("/api/artwork", artworkRouter);

module.exports = app;
