import express from "express"
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.post("/createUser", createUser)
userRouter.get("/getUsers", getUsers)
userRouter.put("/updateUser/:id", updateUser)
userRouter.delete("/deleteUser/:id", deleteUser)

export default userRouter