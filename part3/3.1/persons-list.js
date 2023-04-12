const express = require("express")

const app = express()

const data = require("../src/data")

app.get("/api/persons", (_, res) => {
  res.json(data)
})

module.exports = app
