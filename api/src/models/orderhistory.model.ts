import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  orderedFoods: [
    {
      foodName: String,
      foodQuatity: Number,
      discount: Number,
    },
  ],
  totalValue: {
    type: Number,
    require: true,
  },
});

export const OrderHistoryModel = model("orderhistory", orderSchema);
