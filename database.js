const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/Alradwa";

mongoose
  .connect(URL)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("error", err);
  });