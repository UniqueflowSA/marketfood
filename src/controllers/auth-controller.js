import { authService } from "market-food/src/services/auth-service.js";

const login = async (req, res) => {
  const { userId, password } = req.body;
  try {
    const token = await authService.login(userId, password);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: err.message });
  }
};

const logout = async (req, res) => {
  try {
    await authService.logout(req.user.id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "로그아웃에 실패했습니다." });
  }
};

export { login, logout };
