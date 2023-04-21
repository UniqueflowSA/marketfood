import cors from "cors";
import express from "express";
import path from "path";
import {
  userRouter,
  authRouter,
  categoryRouter,
  nationRouter,
  viewsRouter,
  productRouter,
  orderRouter,


} from "./routers";
import { errorHandler } from "./middlewares";
import mongoose from "mongoose";

const app = express();

app.use(cors());
  
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));


// html, css, js 라우팅
app.use(viewsRouter);


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/nation", nationRouter);
app.use("/api/view", viewsRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use(errorHandler);




export { app };
