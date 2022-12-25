import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  phoneNumber: Number,
  password: String,
  cpassword: String,
  role: { type: String, default: "client" },
  dateOfJoin: { type: Date, default: Date.now() },
});

const user = mongoose.model("user", userSchema);

export default user;
