const express = require("express");

const router = express.Router();

const path = require("path");

router.get("/homepage", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/homepage.html"));
});

router.get("/profile", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/profile.html"));
});

router.get("/signin", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/signin.html"));
});

router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/landing.html"));
});

module.exports = router;
