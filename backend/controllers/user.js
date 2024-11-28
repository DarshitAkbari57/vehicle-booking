
const UserService = require("../services/user");

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log('name, email', name, email);

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const newUser = await UserService.createUser({ name, email }); // Use UserService
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user", details: error.message });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await UserService.getUserById(); // Use UserService to fetch users
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users", details: error.message });
  }
};
