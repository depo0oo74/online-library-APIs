import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;
import publishingHouseModel from "../models/publishingHouse.model.js";

// ** get all publishing houses
export const getAllPublishingHouses = async (req, res, next) => {
  const publishingHouses = await publishingHouseModel.find();
  res.status(200).send({
    data: publishingHouses,
  });
};

// ** get specific publishing house
export const getSpecificPublishingHouse = async (req, res, next) => {
  const publishingHouseId = req.params.publishingHouseId;
  if (!objectId.isValid(publishingHouseId)) {
    return res.status(400).send("publishing House Id is wrong format");
  }
  const specificPublishingHouse = await publishingHouseModel.findById(publishingHouseId);
  if (!specificPublishingHouse) {
    return res.status(400).send("this publishing house dose not exist");
  }
  res.status(200).send({
    data: specificPublishingHouse,
  });
};

// ** create a new publishing house
export const createPublishingHouse = async (req, res, next) => {
  const isFaq = await publishingHouseModel.findOne({ name: req.body.name });
  if (isFaq) {
    return res.status(400).send("this faq already exist");
  }
  await publishingHouseModel.create({
    name: req.body.name,
  });
  res.status(200).send({
    data: {
      name: req.body.name,
    },
  });
};

// ** update specific publishing house
export const updatePublishingHouse = async (req, res, next) => {
  const publishingHouseId = req.params.publishingHouseId;
  if (!objectId.isValid(publishingHouseId)) {
    return res.status(400).send("publishing House Id is wrong format");
  }
  const specificPublishingHouse = await publishingHouseModel.findById(publishingHouseId);
  if (!specificPublishingHouse) {
    return res.status(400).send("this publishing house dose not exist");
  }
  await publishingHouseModel.updateOne(specificPublishingHouse, {
    name: req.body.name,
  });
  res.status(200).send({
    data: {
      name: req.body.name,
    },
  });
};

// ** delete specific publishing house
export const deletePublishingHouse = async (req, res, next) => {
  const publishingHouseId = req.params.publishingHouseId;
  if (!objectId.isValid(publishingHouseId)) {
    return res.status(400).send("publishing House Id is wrong format");
  }
  const specificPublishingHouse = await publishingHouseModel.findById(publishingHouseId);
  if (!specificPublishingHouse) {
    return res.status(400).send("this publishing house dose not exist");
  }
  await publishingHouseModel.deleteOne(specificPublishingHouse);
  res.status(200).send("publishing house deleted successfully");
};
