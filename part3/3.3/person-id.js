const express = require("express")
const app = express()

const data = require("../src/data")

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = data.find((person) => person.id === id)
  person ? response.json(person) : response.status(404).end()
})
module.exports = app
