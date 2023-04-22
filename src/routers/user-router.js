import { Router } from "express";
import { createUser, getUser, updateUser, deleteUser } from "../controllers/user-controller.js";


// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.get("/mypage/:userId", getUser);
userRouter.patch("/mypage/:userId", updateUser);
userRouter.delete("/mypage/:userId", deleteUser);

export default userRouter
