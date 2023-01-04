import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;
import sliderModel from "../models/slider.model.js";

// ** get all sliders
export const getAllSliders = async (req, res, next) => {
  const sliders = await sliderModel.find();
  res.status(200).send({
    data: sliders,
  });
};

// ** get specific slider
export const getSpecificSlider = async (req, res, next) => {
  const sliderId = req.params.sliderId;
  if (!objectId.isValid(sliderId)) {
    return res.status(400).send({
      message: "slider Id is wrong format",
    });
  }
  const specificSlider = await sliderModel.findById(sliderId);
  if (!specificSlider) {
    return res.status(400).send({
      message: "this slider dose not exist",
    });
  }
  res.status(200).send({
    data: specificSlider,
  });
};

// ** create a new slider
export const createSlider = async (req, res, next) => {
  await sliderModel.create({
    title: req.body.title,
    caption: req.body.caption,
    image: req.body.image,
  });
  res.status(200).send({
    data: {
      title: req.body.title,
      caption: req.body.caption,
      image: req.body.image,
    },
  });
};

// ** update specific slider
export const updateSlider = async (req, res, next) => {
  const sliderId = req.params.sliderId;
  if (!objectId.isValid(sliderId)) {
    return res.status(400).send({
      message: "slider Id is wrong format",
    });
  }
  const specificSlider = await sliderModel.findById(sliderId);
  if (!specificSlider) {
    return res.status(400).send({
      message: "this slider dose not exist",
    });
  }
  await sliderModel.updateOne(specificSlider, {
    title: req.body.title,
    caption: req.body.caption,
    image: req.body.image,
  });
  res.status(200).send({
    data: {
      title: req.body.title,
      caption: req.body.caption,
      image: req.body.image,
    },
  });
};

// ** delete specific slider
export const deleteSlider = async (req, res, next) => {
  const sliderId = req.params.sliderId;
  if (!objectId.isValid(sliderId)) {
    return res.status(400).send({
      message: "slider Id is wrong format",
    });
  }
  const specificSlider = await sliderModel.findById(sliderId);
  if (!specificSlider) {
    return res.status(400).send({
      message: "this slider dose not exist",
    });
  }
  await sliderModel.deleteOne(specificSlider);
  res.status(200).send({
    message: "slider deleted successfully",
  });
};
