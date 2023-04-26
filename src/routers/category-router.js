import { Router } from "express";

import { categoryController } from "../controllers/category-controller.js";
// import { bodyEmptyChecker } from "../middlewares";

const categoryRouter = Router();

categoryRouter.post("/category", categoryController.createCategory);
categoryRouter.get("/category", categoryController.getCategoryList);
categoryRouter.get("/category/:categoryId", categoryController.getCategoryById);
// categoryRouter.get("/categoty/search", categoryController.getCategoryByName);
categoryRouter.put("/category/:categoryId", categoryController.updateCategory);// 관리자 로그인 여부 추가해야됨!
categoryRouter.delete("/category/:categoryId", categoryController.deleteCategory);// 관리자 로그인 여부 추가해야됨!!

export default categoryRouter
