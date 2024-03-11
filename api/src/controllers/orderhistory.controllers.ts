import { RequestHandler } from "express";
import { OrderHistoryModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getAllOrderHistory: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ message: "not authorized" });
  }

  const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
  const { id } = payload;

  const userHistory = await OrderHistoryModel.find({ userId: id });
  res.json(userHistory);
};

export const createOrderHistory: RequestHandler = async (req, res) => {
  const { totalValue, orderedFoods } = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ message: "not authorized" });
  }

  const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
  const { id } = payload;

  const userHistory = await OrderHistoryModel.create({ userId: id, totalValue: totalValue, orderedFoods: orderedFoods });
  return res.json(userHistory);
};
