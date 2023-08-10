import mongoose from "mongoose";
const DB_URL = `mongodb+srv://dep0oo74:A372019a@dep0oo74.mk0uu.mongodb.net/`;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("error", err);
  });
