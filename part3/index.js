const express = require("express")
const app = express()

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server runnig ar ${PORT}`)
})

app.get("/", (_, res) => {
  res.send("hello from simple server :)")
})

const persons = require("./src/persons")
app.use(persons)
