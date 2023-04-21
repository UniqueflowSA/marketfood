import cors from "cors";
import express from "express";
import { fileURLToPath } from "url"; // fileURLToPath 함수 import
import path from "path";
import {
  userRouter,
  authRouter,
  // categoryRouter,
  // nationRouter,
  // viewsRouter,
   productRouter,
  // orderRouter,
} from "./routers/index.js";
//import { errorHandler } from "./middlewares/index.js";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url); // 현재 파일 경로
const __dirname = path.dirname(__filename); // 현재 파일이 위치한 디렉토리 경로

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

// MongoDB 연결
mongoose.connect("mongodb://localhost/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB connected!");
});

// HTML, CSS, JS 라우팅
//app.use("/", viewsRouter);

// API 라우팅
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/nation", nationRouter);
app.use("/api/product", productRouter);
// app.use("/api/order", orderRouter);

// 에러 핸들러
//app.use(errorHandler);

export { app };
