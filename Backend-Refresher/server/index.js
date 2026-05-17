import express from "express"
import cors from "cors"
const app = express()
const PORT = 8000
const ROLE = "admin"
app.use(cors({
  origin: "http://localhost:5173"
}))
// check what happens if we dont add json in middleware
// Above question is answered
app.use(express.json())

// custom middleware that allows only admin users
app.use((req, res, next) => {
  if (req.body.role != ROLE) {
    res.status(400).json({
      success: "false", reason: "Your role is restricted"
    })
  }

  // This line is imp. - else the req. will hang on
  next()
})

app.get("/", (req, res) => {
  res.json({ msg: "Hello Server is Running !!" })
})

// This will give error if u dont mention express.json in middle ware : Without `express.json()`, Express cannot parse JSON request data, so `req.body` becomes `undefined`.

app.post("/", (req, res) => {
  console.log(req.body)
  res.json({ success: "true", recievedData: req.body })
})

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
})



// MIDDLEWARES - runs before the req. if it runs successfully
//  3 types
// - thirdparty : cors
// - builtin : like json 
// - custom : like those which we craete ex: isAuthenticated
//           if next is not is not present thenn the req. hands there itself


// STATUS COSES : 
// - 100-199 : Informational
// 200-299 : Successfull 
// 300-399 : Redirection
// 400-499 - Client error
// 500-599 : Server error 

// HTTP HEADERS : key value pairs that are used in HTTP reqs and res. to pass some additinal info (metadata)
// Req : req.get() or req.headers
// Res : res.set() or res.header , res.removeHeader()