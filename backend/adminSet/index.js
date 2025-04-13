const mongoose = require("mongoose");
const User = require("../models/User"); // Adjust path if needed
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);

const setAdmin = async () => {
  await User.findOneAndUpdate(
    { email: "admin0210@gmail.com" }, // Change to your admin email
    { role: "admin" }
  );
  console.log("Admin role assigned");
  mongoose.disconnect();
};

setAdmin();
