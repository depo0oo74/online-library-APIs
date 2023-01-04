import mongoose from "mongoose";
import bcrypt from "bcrypt";
const objectId = mongoose.Types.ObjectId;
import userModel from "../models/user.model.js";

// ** get all users
export const getAllUsers = async (req, res, next) => {
  const users = await userModel.find();
  res.status(200).send({
    data: users,
  });
};

// ** get specific user
export const getSpecificUser = async (req, res, next) => {
  const userId = req.params.userId;
  if (!objectId.isValid(userId)) {
    return res.status(400).send({
      message: "user Id is wrong format",
    });
  }
  const specificUser = await userModel.findById(userId);
  if (!specificUser) {
    return res.status(400).send({
      message: "this user dose not exist",
    });
  }
  res.status(200).send({
    data: specificUser,
  });
};

// ** create a new user
export const createUser = async (req, res, next) => {
  const isUser = await userModel.findOne({ email: req.body.email });
  if (isUser) {
    return res.status(400).send({
      message: "this user already exist",
    });
  }
  if (req.body.password !== req.body.cpassword) {
    return res.status(400).send({
      message: "Passwords do not match",
    });
  }
  const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
  await userModel.create({
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: encryptedPassword,
    addresses: req.body.addresses,
    role: req.body.role,
  });
  res.status(200).send({
    data: {
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      addresses: req.body.addresses,
    },
  });
};

// ** update specific user
export const updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  if (!objectId.isValid(userId)) {
    return res.status(400).send({
      message: "user Id is wrong format",
    });
  }
  const specificUser = await userModel.findById(userId);
  if (!specificUser) {
    return res.status(400).send({
      message: "this user dose not exist",
    });
  }
  const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
  await userModel.updateOne(specificUser, {
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: encryptedPassword,
    addresses: req.body.addresses,
    role: req.body.role,
  });
  res.status(200).send({
    data: {
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      addresses: req.body.addresses,
    },
  });
};

// ** delete specific user
export const deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  if (!objectId.isValid(userId)) {
    return res.status(400).send({
      message: "user Id is wrong format",
    });
  }
  const specificUser = await userModel.findById(userId);
  if (!specificUser) {
    return res.status(400).send({
      message: "this user dose not exist",
    });
  }
  await userModel.deleteOne(specificUser);
  res.status(200).send({
    message: "user deleted successfully",
  });
};
