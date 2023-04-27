import cors from "cors";
import express from "express";
import { fileURLToPath } from "url"; // fileURLToPath 함수 import
import path from "path";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();
import {
  userRouter,
  authRouter,
  categoryRouter,
  productRouter,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  nationRouter,
=======
  // nationRouter,
>>>>>>> 84603f2 (카테고리 등록, 전체 불러오기 기능 구현)
=======
  nationRouter,
>>>>>>> 27030e5 (nation API cnrk)
=======
  nationRouter,
>>>>>>> dev-BE-jonguk
  // viewsRouter,
  // orderRouter,
=======
  orderRouter,
>>>>>>> dev-BE-seunghwan
} from "./routers/index.js";
import { errorHandler } from "./middlewares/error-handler.js";

import mongoose from "mongoose";
dotenv.config();

const __filename = fileURLToPath(import.meta.url); // 현재 파일 경로
const __dirname = path.dirname(__filename); // 현재 파일이 위치한 디렉토리 경로

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

// MongoDB 연결

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } )
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
<<<<<<< HEAD
app.use(userRouter);
app.use(authRouter);
<<<<<<< HEAD
=======
//app.use("/api/auth", authRouter);
>>>>>>> dev-BE-jonguk
app.use(categoryRouter);
app.use(nationRouter);
app.use(productRouter);
app.use(orderRouter);
=======
app.use("/user",userRouter);
app.use("/auth",authRouter);
app.use(productRouter);
//app.use("/api/auth", authRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/nation", nationRouter);
// app.use(productRouter);
// app.use("/api/order", orderRouter);
>>>>>>> dev-FE

// 에러 핸들러
app.use(errorHandler);

export { app };
