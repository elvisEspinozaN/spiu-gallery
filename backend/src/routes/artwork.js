const express = require("express");
const router = express.Router();
const prisma = require("../prisma/client");

router.get("/", async (req, res) => {
  try {
    // style parameter from the URL / filter by style : nothing
    const { style } = req.query;
    const artworks = await prisma.artwork.findMany({
      where: style ? { style } : {},
    });
    res.json(artworks);
  } catch (err) {
    console.error("Error fetching artowrk:", err);
    res.status(500).json({ error: "Failed to fetch artwork" });
  }
});

module.exports = router;
