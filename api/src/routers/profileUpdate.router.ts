import { Router } from "express";
import { getProfile, updateProfile } from "../controllers";

const update = Router();

update.get("/", getProfile).post("/update", updateProfile);
export default update;
