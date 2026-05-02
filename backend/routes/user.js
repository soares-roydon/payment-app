import { Router } from "express";
import { LoginSchema, UpdateUserSchema, UserSchema } from "../validate.js";
import { User } from "../db.js";
import { createToken } from "../utils/createToken.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const user = req.body;
  const parsedUser = UserSchema.safeParse(user);

  if (!parsedUser.success) {
    return res.status(400).json({
      message: "Invalid input",
      error: parsedUser.error.issues[0],
    });
  }

  const { firstName, lastName, email, password } = parsedUser.data;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(409)
        .json({ message: "User already exist with the given email" });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).json({
      userId: newUser._id,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Some internal error occurred" });
  }
});

userRouter.post("/signin", async function (req, res) {
  const credentials = req.body;

  const parsedCredentials = LoginSchema.safeParse(credentials);

  if (!parsedCredentials.success) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const { email, password } = parsedCredentials.data;

  try {
    const userExist = await User.findOne({ email, password });

    if (!userExist) {
      return res
        .status(401)
        .json({ message: "User does not exist, please try sign up" });
    }

    const token = createToken(email);

    return res.status(200).json({ message: "Signed in successfully", token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Some internal error occurred" });
  }
});

userRouter.put("/update", authMiddleware, async function (req, res) {
  const userDetails = req.body;
  const parsedUser = UpdateUserSchema.safeParse(userDetails);

  if (!parsedUser.success) {
    return res.status(400).json({ message: "Invalid inputs" });
  }

  const { firstName, lastName, password } = parsedUser.data;

  try {
    await User.updateOne(
      { email: req.email },
      {
        firstName,
        lastName,
        password,
      },
    );

    return res
      .status(201)
      .json({ message: "Information updated succeessfully" });
  } catch (e) {
    return res.status(500).json({ message: "Some internal error occured" });
  }
});

userRouter.get("/bulk", async function (req, res) {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
          $options: "i",
        },
      },
      {
        lastName: {
          $regex: filter,
          $options: "i",
        },
      },
    ],
  });

  console.log(users);

  return res.json({
    user: users.map(function (user) {
      return {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      };
    }),
  });
});
