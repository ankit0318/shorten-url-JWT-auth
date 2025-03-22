// Import dependencies
const express = require("express");
const app = express();
const router = require("./routes/userRoutes");
const { connectMongoDb } = require("./connection");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Adding JSON middleware for API requests

// Initialize Express app

const PORT = 3000;
app.use("/url", router);

// MongoDB connection
connectMongoDb("mongodb://127.0.0.1:27017/shorten-url");

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
