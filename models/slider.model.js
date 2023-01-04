import mongoose from "mongoose";

const slideSchema = mongoose.Schema({
  title: String,
  caption: String,
  image: String,
});

const slider = mongoose.model("slider", slideSchema);

export default slider;
