import { ObjectID } from "bson";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  phoneNumber: String,
  password: String,
  cpassword: String,
  addresses: [
    {
      id: { type: ObjectID },
      address: String,
    },
  ],
  role: { type: String, default: "client" },
  dateOfJoin: { type: Date, default: Date.now() },
});

const user = mongoose.model("user", userSchema);

export default user;
