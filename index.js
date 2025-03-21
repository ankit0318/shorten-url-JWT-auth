// Import dependencies

const express=require("express");
const app = express();
const router = require("./router/userRoutes");
const { connectMongoDb } = require("./connection");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Adding JSON middleware for API requests

// Initialize Express app

const PORT = process.env.PORT || 3000;
app.use('/user',router);


// MongoDB connection
connectMongoDb("mongodb://127.0.0.1:27017/practice");


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));