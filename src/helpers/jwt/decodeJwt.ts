import jwt from "jsonwebtoken";

export function DecodeJWT(token: string) {
  return jwt.decode(token);
}
