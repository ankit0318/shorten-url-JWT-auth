

// filepath: c:\Users\HP\Desktop\Practice\node-practice\controllers\controllers.js


const User = require("../model/User");
// Middleware

// Controller to fetch all users
const getAllUsers = async (req, res) => {
  try {
    const allDbUsers = await User.find({});
    const users = allDbUsers.map((user) => `<li>${user.email}</li>`).join("");

    const html = `
        <html>
            <body>
                <ul>${users}</ul>
            </body>
        </html>`;

    res.send(html);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Controller to create a new user
const createUser = async (req, res) => {
  try {
    const body = req.body;
    if (!body || !body.email || !body.name) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const result = await User.create({
      name: body.name,
      email: body.email,
      gender: body.gender || undefined,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: result });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Controller to fetch a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const html = `
        <html>
            <body>
                <pre>${JSON.stringify(user, null, 2)}</pre>
            </body>
        </html>`;

    res.send(html);
  } catch (err) {
    console.error("Error fetching user:", err);
    return res.status(404).json({ error: "User not found" });
  }
};

// Controller to update a user by ID
const updateUserById = async (req, res) => {
  try {
    const { email, name, gender } = req.body;
    const updateData = {};

    if (email) updateData.email = email;
    if (name) updateData.name = name;
    if (gender) updateData.gender = gender;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No update data provided" });
    }

    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Failed to update user" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
};
