import { Router } from "express";
import { login, logout } from "../controllers/auth-controller";
import { userService } from "../services/user-service";
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/logout", logout);

export { authRouter };
