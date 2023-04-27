import { Router } from "express";
import { nationController } from "../controllers/nation-controller.js";

const nationRouter = Router();
// 수정, 삭제 = 관리자 로그인 여부 확인하는 미들웨어 추가 해야됨!!
nationRouter.post("/nation", nationController.createNation);
nationRouter.get("/nation", nationController.getNationList);
nationRouter.get("/nation/:nationId", nationController.getNationById);
nationRouter.put("/nation/:nationId", nationController.updateNation);
nationRouter.delete("/nation/:nationId", nationController.deleteNation);// 관리자 로그인 여부 추가해야됨!!

export default nationRouter