import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./config/db.js"
import userRouter from "./routes/user.route.js"
const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json())
app.use("/api/users", userRouter)


// Routes
app.get("/", (req, res) => {
  res.json({
    msg: "Hello Server is Running - Mongodb!!"
  })
})

// Start Server only after DB connection
const startServer = async () => {
  await connectDB(MONGO_URI)

  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
  })
}

startServer()