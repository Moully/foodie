import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import categoryRouter from "./routers/category.router";
import orderHistory from "./routers/orderHistory.router";
import update from "./routers/profileUpdate.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);

app.use("/foods", foodRouter);
app.use("/category", categoryRouter);
app.use("/order", orderHistory);
app.use("/profile", update);

export default app;
