import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

await mongoose.connect(process.env.MONGO_URI)

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

export const User = mongoose.model("User", userSchema)
