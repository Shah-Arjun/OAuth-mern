const mongoose = require("mongoose");


//mongodb connection function
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Failed to connect Database", error.message);
    process.exit(1);   //stop app if connection fails
  }

  

};



module.exports = connectMongoDB;