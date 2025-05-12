import express from "express"

const app = express()

const host = "localhost"
const port = 8017
app.get("/", (req, res) => {
  res.send("<h2>Hello World NodeJS</h2>")
})

app.listen(port, host, () => {
  console.log("Hi, Im running server on port", port)
})
