import { Router } from "express";
import { createFoods, getAllFoods } from "../controllers";

const foodRouter = Router();

foodRouter.get("/", getAllFoods).post("/create", createFoods);
export default foodRouter;
