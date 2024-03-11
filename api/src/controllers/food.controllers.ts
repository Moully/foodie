import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const getAllFoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});
  if(!foods)
  res.json(foods);
};

export const createFoods: RequestHandler = async (req, res) => {
  const { name, category, ingredients, price, discount, image } = req.body;
  
  const food = await FoodModel.create({ name, category, ingredients, price, discount, image });

  res.json(food);
};
