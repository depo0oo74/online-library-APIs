import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  title: String,
  content: String,
  dateOfCreation: { type: Date, default: Date.now() },
});

const message = mongoose.model("message", messageSchema);

export default message;
