const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Import your User model

// Sign-up route
router.post("/signup", async (req, res) => {
  // Handle user registration logic here
});

// Sign-in route
router.post("/signin", async (req, res) => {
  // Handle user authentication logic here
});

module.exports = router;
