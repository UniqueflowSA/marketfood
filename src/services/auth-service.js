import { Auth } from "../db/models/auth-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error(
        "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
      );
    }

    const token = jwt.sign({ id: user.id, role: user.role }, secretKey, {
      expiresIn: "1h",
    });

    return { token, isAdmin: user.role === "admin" };
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
      { id: userId, role: "admin" },
      secretKey,
      { expiresIn: "1h" }
    );
    return token;
  },
};
