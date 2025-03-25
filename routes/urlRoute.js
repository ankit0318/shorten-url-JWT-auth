const express = require("express");
const {
  handleShortenUrl,
  handleGetAnalytics,
  handleRedirectUrl,
} = require("../controllers/urlController");
const { restrictAuth } = require("../middleware/auth");

const router = express.Router();
router.post("/", handleShortenUrl);
router.get("/:shortId", handleRedirectUrl);
router.get("/analytics/:shortId", restrictAuth,handleGetAnalytics);
router.get("/", (req, res) => res.render("home", { shortUrl: null }));
module.exports = router;
