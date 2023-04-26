import { Router } from "express";

import { categoryController } from "../controllers/category-controller.js";
// import { bodyEmptyChecker } from "../middlewares";

const categoryRouter = Router();

categoryRouter.post("/category", categoryController.createCategory);
categoryRouter.get("/category", categoryController.getCategoryList);
// categoryRouter.get("/categoty/search", categoryController.getCategoryByName);
categoryRouter.get("/categoty/:cid", categoryController.getCategoryById);
categoryRouter.put("/categoty/:cid", categoryController.updateCategory);
categoryRouter.delete("/categoty/:cid", categoryController.deleteCategory);

export default categoryRouter
