import express from "express";
import { userRouter } from "../routes/user.js";
import { accountRouter } from "./account.js";

export const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter)
