import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: false,
  },
  phone: {
    type: String,
    require: false,
  },
  profilePic: {
    type: String,
    require: false,
  },
  role: {
    type: String,
    default: "customer",
  },
});

export const UserModel = model("user", userSchema);
