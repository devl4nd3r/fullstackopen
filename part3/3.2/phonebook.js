const axios = require("axios")
const express = require("express")

const phonebookRouter = express()

const data = require("../src/data")

phonebookRouter.get("/info", (_, res) => {
  const now = new Date()
  res.send(`Phonebook has info of ${data.length} people <br /> ${now}`)
})

const deleteEntry = (id = "") => {
  const resp = axios
    .delete(`api/persons/${id}`)
    .then((response) => console.log(response))
}

module.exports = phonebookRouter
