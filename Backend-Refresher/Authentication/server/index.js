import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
dotenv.config()
const app = express()


const PORT = process.env.PORT || 5000
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api", authRouter)

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    msg: "Server is running"
  })
})

const startServer = async () => {
  await dbConnect(process.env.MONGO_URL);

  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
  })

}
startServer()