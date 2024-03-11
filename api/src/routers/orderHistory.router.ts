import { Router } from "express";
import { createOrderHistory, getAllOrderHistory } from "../controllers";

const orderHistory = Router();

orderHistory.get("/", getAllOrderHistory).post("/create", createOrderHistory);
export default orderHistory;
