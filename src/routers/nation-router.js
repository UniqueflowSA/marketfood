import { Router } from "express";
import { nationController } from "../controllers/nation-controller.js";

const nationRouter = Router();

nationRouter.post("/nation", nationController.createNation);

export default nationRouter