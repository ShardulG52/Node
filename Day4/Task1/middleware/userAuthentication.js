import jwt from "jsonwebtoken";
import createError from "http-errors";
import * as dotenv from "dotenv";

export const authenticate = (req, res, next) => {
  try {
    const requestHeader = req.headers["authorization"];
    const token = requestHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_CODE);
    next();
  } catch (error) {
    next(createError(403, new Error("Not Authorized")));
  }
};
