import authModel from "../../db/models/auth-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (userId, password) => {
  const user = await authModel.User.findOne({ where: { userId } });
  if (!user) {
    throw new Error("없는 아이디입니다.");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Invalid login credentials.");
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const logout = async (userId) => {
  // implement logout logic, e.g. delete refresh token from DB
};

export const authService = { login, logout };
