// router to check if api is live adn reachable
const express = require("express");
const router = express.Router();
const prisma = require("../prisma/client.js");

router.get("/", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(503).json({ status: "error", message: "Database unreachable" });
  }
});

module.exports = router;
