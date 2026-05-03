import jwt from "jsonwebtoken"

export function createToken(id) {
    const token = jwt.sign({id}, process.env.JWT_PASSWORD)
    return token
}