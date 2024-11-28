const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// Routes
router.post("/create", userController.createUser); // Create User
router.get("/get", userController.getUsers);       // Get All Users

module.exports = router;
