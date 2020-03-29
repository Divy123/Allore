import jwt from "jsonwebtoken";
const getToken = request => {
  const header = request.request.headers.authorization;
  if (!header) {
    return null;
  }
  const token = header.replace("Bearer ", "");
  const decoded = jwt.verify(token, "mysecretkey");
  return decoded;
};
export { getToken as default };
