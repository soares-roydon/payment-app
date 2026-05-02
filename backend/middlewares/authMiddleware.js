import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
    req.email = decoded.email;

    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
