import express from "express";
import { userRouter } from "../routes/user.js";

export const router = express.Router();

router.use("/user", userRouter);
