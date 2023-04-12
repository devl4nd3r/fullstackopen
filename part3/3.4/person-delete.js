const express = require("express")
const app = express()

const data = require("../src/data")

app.delete("/api/person/:id", (request, response) => {
  const id = Number(request.params.id)
  response.json(data.filter((person) => person.id !== id))
})

module.exports = app
