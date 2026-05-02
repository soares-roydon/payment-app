import { z } from "zod"

// const user = {
//     firstName: "Roydon",
//     lastName: "Soares",
//     email: "roy@gmail.com",
//     password: "123456"
// }

export const UserSchema = z.object({
    firstName: z.string().min(1).max(16),
    lastName: z.string().min(1).max(16),
    email: z.email(),
    password: z.string().min(6).max(16)
})

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string().max(16)
})

export const UpdateUserSchema = z.object({
    firstName: z.string().min(1).max(16),
    lastName: z.string().min(1).max(16),
    password: z.string().min(6).max(16)
})