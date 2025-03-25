const express = require("express");
const { handleSignUp, handleLogin } = require("../controllers/userControllers");
const router = express.Router();

router
  .route("/login")
  .get((req, res) => res.render("login"))
  .post(handleLogin);
router
  .route("/signup")
  .get((req, res) => res.render("sign-up"))
  .post(handleSignUp);
module.exports = router;
