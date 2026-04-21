import http from "http"

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Home page")
  }
  else if (req.url == "/about") {
    res.end("About page")
  }
  else{
    res.end("404 Error")
  }
})

server.listen(8000, () => {
  console.log("Server Started")
}
)