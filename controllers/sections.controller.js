import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;
import sectionModel from "../models/section.model.js";

// ** get all sections
export const getAllSections = async (req, res, next) => {
  const sections = await sectionModel.find();
  res.status(200).send({
    data: sections,
  });
};

// ** get specific section
export const getSpecificSection = async (req, res, next) => {
  const sectionId = req.params.sectionId;
  if (!objectId.isValid(sectionId)) {
    return res.status(400).send("section Id is wrong format");
  }
  const specificSection = await sectionModel.findById(sectionId);
  if (!specificSection) {
    return res.status(400).send("this section dose not exist");
  }
  res.status(200).send({
    data: specificSection,
  });
};

// ** create a new section
export const createSection = async (req, res, next) => {
  const isSection = await sectionModel.findOne({ name: req.body.name });
  if (isSection) {
    return res.status(400).send("this section already exist");
  }
  await sectionModel.create({
    name: req.body.name,
  });
  res.status(200).send({
    data: {
      name: req.body.name,
    },
  });
};

// ** update specific section
export const updateSection = async (req, res, next) => {
  const sectionId = req.params.sectionId;
  if (!objectId.isValid(sectionId)) {
    return res.status(400).send("section Id is wrong format");
  }
  const specificSection = await sectionModel.findById(sectionId);
  if (!specificSection) {
    return res.status(400).send("this section dose not exist");
  }
  await sectionModel.updateOne(specificSection, {
    name: req.body.name,
  });
  res.status(200).send({
    data: {
      name: req.body.name,
    },
  });
};

// ** delete specific section
export const deleteSection = async (req, res, next) => {
  const sectionId = req.params.sectionId;
  if (!objectId.isValid(sectionId)) {
    return res.status(400).send("section Id is wrong format");
  }
  const specificSection = await sectionModel.findById(sectionId);
  if (!specificSection) {
    return res.status(400).send("this section dose not exist");
  }
  await sectionModel.deleteOne(specificSection);
  res.status(200).send("section deleted successfully");
};
