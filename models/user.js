const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type:String,
      default:"normal user"
    }
  },
  { timestamps: true }
);

// Create the user model
const User = mongoose.model("user", userSchema);

module.exports = User;
