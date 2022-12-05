import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  imagesUrls: [],
  sectionId: { type: mongoose.Types.ObjectId, ref: "section" },
  language: String,
  author: String,
  price: Number,
  oldPrice: Number,
  brief: String,
  numberOfPapers: Number,
  ISBN: String,
  depositNumber: String,
  yearOfRelease: Number,
  translatedBy: String,
  investigation: String,
  dateOfCreation: { type: Date, default: Date.now() },
});

const product = mongoose.model("product", productSchema);

export default product;
