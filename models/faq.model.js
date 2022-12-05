import mongoose from "mongoose";

const faqSchema = mongoose.Schema({
  question: String,
  answer: String,
  dateOfCreation: { type: Date, default: Date.now() },
});

const faq = mongoose.model("faq", faqSchema);

export default faq;
