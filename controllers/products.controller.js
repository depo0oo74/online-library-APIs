import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;
import productModel from "../models/product.model.js";

// ** get all products
export const getAllProducts = async (req, res, next) => {
  const products = await productModel.find();
  res.status(200).send({
    data: products,
  });
};

// ** get specific product
export const getSpecificProduct = async (req, res, next) => {
  const productId = req.params.productId;
  if (!objectId.isValid(productId)) {
    return res.status(400).send("product Id is wrong format");
  }
  const specificProduct = await productModel.findById(productId);
  if (!specificProduct) {
    return res.status(400).send("this product dose not exist");
  }
  res.status(200).send({
    data: specificProduct,
  });
};

// ** create a new product
export const createProduct = async (req, res, next) => {
  await productModel.create({
    name: req.body.name,
    sectionId: req.body.sectionId,
    language: req.body.language,
    author: req.body.author,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    brief: req.body.brief,
    numberOfPapers: req.body.numberOfPapers,
    ISBN: req.body.ISBN,
    depositNumber: req.body.depositNumber,
    yearOfRelease: req.body.yearOfRelease,
    translatedBy: req.body.translatedBy,
    investigation: req.body.investigation,
  });
  res.status(200).send({
    data: {
      name: req.body.name,
      sectionId: req.body.sectionId,
      language: req.body.language,
      author: req.body.author,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      brief: req.body.brief,
      numberOfPapers: req.body.numberOfPapers,
      ISBN: req.body.ISBN,
      depositNumber: req.body.depositNumber,
      yearOfRelease: req.body.yearOfRelease,
      translatedBy: req.body.translatedBy,
      investigation: req.body.investigation,
    },
  });
};

// ** update specific product
export const updateProduct = async (req, res, next) => {
  const productId = req.params.productId;
  if (!objectId.isValid(productId)) {
    return res.status(400).send("product Id is wrong format");
  }
  const specificProduct = await productModel.findById(productId);
  if (!specificProduct) {
    return res.status(400).send("this product dose not exist");
  }
  await productModel.updateOne(specificProduct, {
    name: req.body.name,
    sectionId: req.body.sectionId,
    language: req.body.language,
    author: req.body.author,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    brief: req.body.brief,
    numberOfPapers: req.body.numberOfPapers,
    ISBN: req.body.ISBN,
    depositNumber: req.body.depositNumber,
    yearOfRelease: req.body.yearOfRelease,
    translatedBy: req.body.translatedBy,
    investigation: req.body.investigation,
  });
  res.status(200).send({
    data: {
      name: req.body.name,
      sectionId: req.body.sectionId,
      language: req.body.language,
      author: req.body.author,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      brief: req.body.brief,
      numberOfPapers: req.body.numberOfPapers,
      ISBN: req.body.ISBN,
      depositNumber: req.body.depositNumber,
      yearOfRelease: req.body.yearOfRelease,
      translatedBy: req.body.translatedBy,
      investigation: req.body.investigation,
    },
  });
};

// ** delete specific product
export const deleteProduct = async (req, res, next) => {
  const productId = req.params.productId;
  if (!objectId.isValid(productId)) {
    return res.status(400).send("product Id is wrong format");
  }
  const specificProduct = await productModel.findById(productId);
  if (!specificProduct) {
    return res.status(400).send("this product dose not exist");
  }
  await productModel.deleteOne(specificProduct);
  res.status(200).send("product deleted successfully");
};
