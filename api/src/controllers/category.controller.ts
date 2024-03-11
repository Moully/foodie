import { RequestHandler } from "express";
import { CategoryModel } from "../models";

export const getAllCategory: RequestHandler = async (req, res) => {
  const category = await CategoryModel.find({});
  if (!category) {
    res.json("No category created yet");
  }
  res.json(category);
};

export const createCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;

  const isCategoryExist = await CategoryModel.findOne({ name });
  if (isCategoryExist) {
    return res.json("Category already existed");
  }
  const category = await CategoryModel.create({ name });
  res.json("New category added");
};

export const deleteCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;

  const isCategoryExist = await CategoryModel.findOne({ name });
  if (!isCategoryExist) {
    return res.json("can't find category");
  }

  const deleteCategory = await CategoryModel.findOneAndDelete({ name });
  res.json("Category deleted");
};
export const editCategory: RequestHandler = async (req, res) => {
  const { name, id } = req.body;

  const editCategory = await CategoryModel.findOneAndUpdate({ _id: id }, { $set: { name: name } });
  res.json("Category updated");
};
