const mongoose=require("mongoose");
// Define User Schema
const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      gender: { type: String }
    },
    { timestamps: true }
  );
  
  // Create User model
  const User = mongoose.model("User", userSchema);
  module.exports = User;