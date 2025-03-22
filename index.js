// Import dependencies
//ByteShort.com
const express = require("express");
const path=require("path");
const app = express();
const router = require("./routes/userRoutes");
const { connectMongoDb } = require("./connection");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Adding JSON middleware for API requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public folder

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

const PORT = 3000;
app.use("/url", router);

// MongoDB connection
connectMongoDb("mongodb://127.0.0.1:27017/shorten-url");

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
