import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;
import goalModel from "../models/goal.model.js";

// ** get all goals
export const getAllGoals = async (req, res, next) => {
  const goals = await goalModel.find();
  res.status(200).send({
    data: goals,
  });
};

// ** get specific goal
export const getSpecificGoal = async (req, res, next) => {
  const goalId = req.params.goalId;
  if (!objectId.isValid(goalId)) {
    return res.status(400).send({
      message: "goal Id is wrong format",
    });
  }
  const specificGoal = await goalModel.findById(goalId);
  if (!specificGoal) {
    return res.status(400).send({
      message: "this goal dose not exist",
    });
  }
  res.status(200).send({
    data: specificGoal,
  });
};

// ** create a new goal
export const createGoal = async (req, res, next) => {
  await goalModel.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).send({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  });
};

// ** update specific goal
export const updateGoal = async (req, res, next) => {
  const goalId = req.params.goalId;
  if (!objectId.isValid(goalId)) {
    return res.status(400).send({
      message: "goal Id is wrong format",
    });
  }
  const specificGoal = await goalModel.findById(goalId);
  if (!specificGoal) {
    return res.status(400).send({
      message: "this goal dose not exist",
    });
  }
  await goalModel.updateOne(specificGoal, {
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).send({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  });
};

// ** delete specific goal
export const deleteGoal = async (req, res, next) => {
  const goalId = req.params.goalId;
  if (!objectId.isValid(goalId)) {
    return res.status(400).send({
      message: "gaol Id is wrong format",
    });
  }
  const specificGoal = await goalModel.findById(goalId);
  if (!specificGoal) {
    return res.status(400).send({
      message: "this goal dose not exist",
    });
  }
  await goalModel.deleteOne(specificGoal);
  res.status(200).send({
    message: "goal deleted successfully",
  });
};
