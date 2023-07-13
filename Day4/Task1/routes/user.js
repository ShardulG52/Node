import express from "express";
import {
  getUserDetailsController,
  loginUserController,
  registerUserController,
} from "../controller/user.js";

var userRouter = express.Router();

userRouter.get("/", getUserDetailsController);
userRouter.post("/login", loginUserController);
userRouter.post("/", registerUserController);

export default userRouter;
