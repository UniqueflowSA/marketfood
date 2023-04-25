import { Router } from "express";
import  userController  from "../controllers/user-controller.js";


// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴

const userRouter = Router();

userRouter.post("/signup", userController.createUser);
userRouter.get("/mypage/:userId", userController.getUser);
userRouter.patch("/mypage/:userId", userController.updateUser);
userRouter.delete("/mypage/:userId", userController.deleteUser);

export default userRouter
