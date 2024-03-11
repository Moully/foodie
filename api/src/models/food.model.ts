import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  ingredients: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
    default: 0,
    require: false,
  },
  image: {
    type: String,
    require: true,
  },
});

export const FoodModel = model("food", foodSchema);
