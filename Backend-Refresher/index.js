// import http from "http"

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("Home page")
//   }
//   else if (req.url == "/about") {
//     res.end("About page")
//   }
//   else{
//     res.end("404 Error")
//   }
// })

// server.listen(8000, () => {
//   console.log("Server Started")
// }
// )

import express from "express"

const app = express()
const PORT = 8000

app.get("/",(req,res)=>{
  res.send("Its Home Page")
})

app.listen(PORT,()=>{
  console.log(`Server Started at ${PORT}`)
})