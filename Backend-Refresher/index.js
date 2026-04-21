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
  // res.send("Its Home Page")
  // res.send("<h1>Hello</h1>")
  res.json({name:"Adithya"})
})
app.post("/",(req,res)=>{
  // res.send("Its Home Page")
  res.send("<h1>Hello</h1>")
  // res.json({name:"Adithya"})
})
app.get("/about",(req,res)=>{
  res.send("Its About Page")
})

app.listen(PORT,()=>{
  console.log(`Server Started at ${PORT}`)
})


// HTTP Methods
// -GET :gets
// -POST:submit
// -PATCH:update
// -DELETE :delete 
// -PUT:minor updates


// Sending data :
// - in body : 
    // - JSON 
    // how to access it : by req.body (must include app.use(express.json()))
// - in params (dynamic): to access the route(URL) parameters ex: /user/:id
    // how to access it : by req.params.id 
// - in query(): to access query parameters from URL ex : /search?var1=value1&var2=value2
    // how to access it : by req.query.var1 , req.query.var2