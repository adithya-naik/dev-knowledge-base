import express from "express"
import cors from "cors"
const app = express()
const PORT = 8000
// check what happens if we dont add json in middleware
app.use(cors({
  origin: "http://localhost:5173"
}))

app.get("/", (req, res) => {
  res.json({ msg: "Hello Server is Running !!" })
})

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
})
