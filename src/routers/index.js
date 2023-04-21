import { Router } from "express";
import userRouter from "./user-router.js";
import authRouter from "./auth-router.js";
// import categoryRouter from "./category-router.js";
// import nationRouter from "./nation-router.js";
<<<<<<< HEAD
// import productRouter from "./product-router.js";
=======
 import productRouter from "./product-router.js";
>>>>>>> 6fb49f3 (04/22)
// import orderRouter from "./order-router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
// router.use("/category", categoryRouter);
// router.use("/nation", nationRouter);
<<<<<<< HEAD
// router.use("/product", productRouter);
// router.use("/order", orderRouter);

export { router, userRouter, authRouter };
=======
 router.use("/product", productRouter);
// router.use("/order", orderRouter);

export { router, userRouter, authRouter, productRouter };
>>>>>>> 6fb49f3 (04/22)
