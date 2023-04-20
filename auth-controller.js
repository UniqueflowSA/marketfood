import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { userService } from "../services/user-service";

const login = async (req, res, next) => {
  try {
    // 클라이언트에서 전달받은 아이디/패스워드 추출
    const { userId, password } = req.body;

    // 유효한 유저인지 확인
    const user = await userService.getUserByUsername(userId);
    if (!user) {
      return res.status(401).json({ message: "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요." });
    }

    // 패스워드 검증
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요." });
    }

    // 로그인 성공 시, JWT 토큰 발급
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // 토큰 만료 시간: 1시간
    );

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    // 클라이언트에서 전달받은 JWT 토큰 추출
    const token = req.headers.authorization.split(" ")[1];

    // JWT 토큰 검증
    await jwt.verify(token, process.env.JWT_SECRET);

    // 로그아웃 성공 시, 응답 반환
    res.status(200).json({ message: "로그아웃되었습니다." });
  } catch (error) {
    next(error);
  }
};

export { login, logout };
