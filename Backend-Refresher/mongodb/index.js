import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import User from "./models/user.model.js"
const app = express()
const PORT = 8000

const MONGO_URI = "mongodb+srv://jatothadithyanaik_db_user:YGbE1xSEMTWgMeR9@mongodb-tut-br.uzchiyp.mongodb.net/mongodb-tutorial-br-db"

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.json({
    msg: "Hello Server is Running - Mongodb!!"
  })
})

// C
app.post("/createUser", async (req, res) => {
  try {
    const { name, age, email, username } = req.body
    const user = await User.findOne({ email, username })

    if (user) {
      return res.status(400).json({
        success: false,
        msg: "User already exists"

      })
    }

    const newUser = await User.create({ name, age, email, username })
    console.log(newUser)

    res.status(201).json({
      success: true,
      data: newUser
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false
    })
  }
})
// R
app.get("/getUsers", async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json({
      success: true,
      data: users
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      msg: "Error fetching users"
    })
  }
})
// U
app.put("/updateUser/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json({
      success: true,
      data: updatedUser
    })

  } catch (error) {
    console.log(error)

    res.json({
      success: false,
      msg: "Error updating user"
    })
  }
})
// D
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      msg: "User deleted successfully"
    })

  } catch (error) {
    console.log(error)

    res.json({
      success: false,
      msg: "Error deleting user"
    })
  }
})
// Start Server only after DB connection
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)

    console.log("DB CONNECTED")

    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`)
    })

  } catch (error) {
    console.log("DB Connection Failed :", error)
  }
}

startServer()