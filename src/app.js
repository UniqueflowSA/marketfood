import cors from "cors";
import express from "express";
import path from "path";
import router from './routers/index.js';
// import {
//   userRouter,
//   authRouter,
//   categoryRouter,
//   nationRouter,
//   viewsRouter,
//   productRouter,
//   orderRouter,
// } from "./routers";
import { errorHandler } from "./middlewares";
import mongoose from "mongoose";

app.use(express.static(path.join(path.resolve(), 'public')));


const app = express();

// CORS 에러 방지
app.use(cors());

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를
// 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));


app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));


// html, css, js 라우팅
app.use(viewsRouter);


app.use('/api', router);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/nation", nationRouter);
// app.use("/api/views", viewsRouter);
// app.use("/api/product", productRouter);
// app.use("/api/order", orderRouter);
// app.use(errorHandler);


export { app };
