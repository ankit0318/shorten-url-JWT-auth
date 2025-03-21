
const mongoose = require("mongoose");// MongoDB connection
async function connectMongoDb(url)
{
      return mongoose
        .connect(url)
        .then(() => console.log("MongoDB connected successfully"))
        .catch((err) => console.error("MongoDB connection error:", err));
  
}
module.exports={connectMongoDb};

