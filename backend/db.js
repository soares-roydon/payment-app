import mongoose from "mongoose";
import dotenv from "dotenv";
import { maxLength, minLength } from "zod";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    maxLength: 50
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
export const Account = mongoose.model("Account", accountSchema);
