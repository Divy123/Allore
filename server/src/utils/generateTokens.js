import jwt from "jsonwebtoken";

const generateTokens = (userId, role = "ALUMNI") => {
  return jwt.sign({ userId, role }, "mysecretkey", { expiresIn: "7 days" });
};

export { generateTokens as default };
