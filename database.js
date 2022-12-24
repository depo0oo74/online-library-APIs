import mongoose from "mongoose";
const DB_URL = `mongodb+srv://dep0oo74:JslzS5v0Vaw3Da8r@dep0oo74.mk0uu.mongodb.net/online-library?retryWrites=true&w=majority`;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("error", err);
  });
