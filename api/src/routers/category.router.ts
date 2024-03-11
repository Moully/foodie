import { Router } from "express";
import { createCategory, deleteCategory, editCategory, getAllCategory } from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategory).post("/create", createCategory).post("/edit", editCategory).delete("/delete", deleteCategory);
export default categoryRouter;
