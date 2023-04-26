import { Router } from "express";

import { categoryController } from "../controllers/category-controller.js";
// import { bodyEmptyChecker } from "../middlewares";

const categoryRouter = Router();

categoryRouter.post("/category", categoryController.createCategory);
categoryRouter.get("/category", categoryController.getCategoryList);
categoryRouter.get("/category/:categoryId", categoryController.getCategoryById);
// categoryRouter.get("/categoty/search", categoryController.getCategoryByName);
categoryRouter.put("/category/:categoryId", categoryController.updateCategory);
categoryRouter.delete("/category/:categoryId", categoryController.deleteCategory);

export default categoryRouter
