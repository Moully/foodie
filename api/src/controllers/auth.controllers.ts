import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email,
    password,
  });
  if (!user) {
    return res.status(401).json({
      message: "Wrong email or password",
    });
  }

  const role = user.role;
  const id = user._id;

  const token = jwt.sign({ id, role }, "secret-key");

  return res.json({ token });
};

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password, address } = req.body;

  const user = await UserModel.findOne({
    email,
  });

  if (user) {
    return res.json({
      message: "email already in use",
    });
  }

  const newUser = UserModel.create({
    name,
    email,
    password,
    address,
  });
  return res.json("Hereglegch amjilttai burtgegdlee");
};
