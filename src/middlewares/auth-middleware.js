const authMiddleware = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { id: decoded.id }; // 토큰에서 사용자 id 추출하여 req 객체에 담기
      next();
    } catch (error) {
      next(error);
    }
  };
  