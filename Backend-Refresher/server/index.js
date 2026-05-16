import express from "express"
import cors from "cors"
const app = express()
const PORT = 8000
app.use(cors({
  origin: "http://localhost:5173"
}))
// check what happens if we dont add json in middleware
// Above question is answered
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ msg: "Hello Server is Running !!" })
})

// This will give error if u dont mention express.json in middle ware : Without `express.json()`, Express cannot parse JSON request data, so `req.body` becomes `undefined`.

app.post("/", (req, res) => {
  console.log(req.body)
  res.json({ succes: "true", recievedData: req.body })
})

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
})
