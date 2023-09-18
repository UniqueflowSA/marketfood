import cors from "cors";
import express from "express";
import { fileURLToPath } from "url"; // fileURLToPath 함수 import
import path from "path";
import dotenv from "dotenv";

dotenv.config();
import {
  userRouter,
  authRouter,
  categoryRouter,
  productRouter,
  nationRouter,
  // viewsRouter,
  orderRouter,
} from "./routers/index.js";
import errorHandler from "./middlewares/error-handler.js";

import mongoose from "mongoose";
dotenv.config();

const __filename = fileURLToPath(import.meta.url); // 현재 파일 경로
const __dirname = path.dirname(__filename); // 현재 파일이 위치한 디렉토리 경로

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

app.use(express.static(path.resolve("src", "views")));

// MongoDB 연결

mongoose
  .connect("https://svc.sel5.cloudtype.app:32318/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongodb"))
  .catch(console.error());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB connected!");
});

// HTML, CSS, JS 라우팅
// app.use("/", viewsRouter);

// API 라우팅
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/nation", nationRouter);
app.use("/order", orderRouter);

// 에러 핸들러
app.use(errorHandler);

export { app };
