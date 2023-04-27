import jwt from "jsonwebtoken";
import { Auth } from "../db/models/auth-model.js";

const secretKey = process.env.JWT_SECRET_KEY || "secret-key";

export const authService = {
  async login(userId, password) {
    if (!userId) {
      throw new Error("아이디를 입력해주세요.");
    }
    if (!password) {
      throw new Error("비밀번호를 입력해주세요.");
    }
    const user = await Auth.findOne({ userId: userId });
    if (!user) {
      throw new Error("없는 아이디입니다.");
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      throw new Error(
        "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
      );
    }

    const tokenPayload = { id: user.id };
    const isAdmin = user.isAdmin || false;
    console.log(`isAdmin: ${isAdmin}`);
    if (isAdmin) {
      tokenPayload.isAdmin = true;
    }else {
      tokenPayload.isAdmin = false;
    }
    
    const token = jwt.sign(tokenPayload, secretKey, { expiresIn: "1h" });

    return { token, isAdmin };
  },

  async logout(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      const userId = decoded.id;
    } catch (err) {
      throw new Error("유효하지 않은 토큰입니다.");
    }
  },

  async generateAdminToken(userId) {
    const token = await jwt.sign(
      { id: userId, isAdmin: true },
      secretKey,
      { expiresIn: "1h" }
    );
    return token;
  },
};
