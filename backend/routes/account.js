import express from "express";
import { Account } from "../db.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import mongoose from "mongoose";
import { TransferSchema } from "../validate";

export const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async function (req, res) {
  const account = await Account.findOne({ userId: req.id });

  if (!account._id) {
    return res
      .status(403)
      .json({ message: "Account does not exist, please create a new account" });
  }

  return res.status(200).json({ balance: account.balance });
});

accountRouter.post("/transfer", authMiddleware, async function (req, res) {
  const parsed = TransferSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid input",
      error: parsed.error.issues[0].message,
    });
  }

  const { amount, to } = parsed.data;

  if (to === req.userId) {
    return res.status(400).json({ message: "Cannot transfer to yourself" });
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Invalid account" });
    }

    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();

    return res.status(200).json({ message: "Transaction successful" });
  } catch (e) {
    await session.abortTransaction();
    return res.status(500).json({ message: "Some internal error occurred" });
  } finally {
    session.endSession();
  }
});