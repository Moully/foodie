import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getProfile: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
  const { id } = payload;

  const user = await UserModel.findById(id);

  return res.json(user);
};

export const updateProfile: RequestHandler = async (req, res) => {
  const { name, phone, email, image } = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const checkMail = await UserModel.findOne({ email });
  if (checkMail) {
    return res.json({ message: "email already in use" });
  }
  const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
  const { id } = payload;

  const user = await UserModel.findOneAndUpdate({ _id: id }, { $set: { name: name, phone: phone, email: email, image: image } });
  return res.json("Мэдээлэл амжилттай хадгалагдлаа");
};
