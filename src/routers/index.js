import { Router } from "express";
import userRouter from "./user-router.js";
import authRouter from "./auth-router.js";
import categoryRouter from "./category-router.js";
import nationRouter from "./nation-router.js";
import productRouter from "./product-router.js";
import orderRouter from "./order-router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use(nationRouter);
router.use(productRouter);
router.use("/order", orderRouter);

export { router, userRouter, authRouter, categoryRouter, productRouter, orderRouter, nationRouter };
