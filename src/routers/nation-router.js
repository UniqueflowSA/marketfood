import { Router } from "express";
import { nationController } from "../controllers/nation-controller.js";

const nationRouter = Router();

nationRouter.post("/nation", nationController.createNation);
nationRouter.get("/nation", nationController.getNationList);
nationRouter.get("/nation/:nationId", nationController.getNationById);
nationRouter.put("/nation/:nationId", nationController.updateNation);
nationRouter.delete("/nation/:nationId", nationController.deleteNation);

export default nationRouter;