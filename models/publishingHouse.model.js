import mongoose from "mongoose";

const publishingHousesSchema = mongoose.Schema({
  name: String,
  dateOfCreation: { type: Date, default: Date.now() },
});

const publishing_house = mongoose.model("publishing_house", publishingHousesSchema);

export default publishing_house;
