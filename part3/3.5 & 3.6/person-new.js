const express = require("express")
const app = express()

const data = require("../src/data")

const generateId = () => {
  const maxId = data.length > 0 ? Math.max(...data.map((n) => n.id)) : 0
  return maxId + 1
}

const generateRandomId = () => {
  return Math.random(10000)
}

app.post("/api/persons", (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    })
  } else {
    if (data.findIndex((e) => e.name == body.name) !== -1) {
      return response.status(400).json({
        error: "name must be unique",
      })
    }
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  const persons = data.concat(person)

  response.json(persons)
})

module.exports = app
