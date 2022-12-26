import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
  title: String,
  content: String,
});

const goal = mongoose.model("goal", goalSchema);

export default goal;
