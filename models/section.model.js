import mongoose from "mongoose";

const sectionSchema = mongoose.Schema({
  name: String,
  dateOfCreation: { type: Date, default: Date.now() },
});

const section = mongoose.model("section", sectionSchema);

export default section;
