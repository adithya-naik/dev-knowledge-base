import http from "http"

const server = http.createServer((req,res)=>{
  res.end("Hello this is my first server !")
})

server.listen(8000,()=>{
  console.log("Server Started")
}
)