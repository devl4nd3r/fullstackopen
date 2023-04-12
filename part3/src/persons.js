const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const data = require("./data")
const personsList = require("../3.1/persons-list")
const phonebook = require("../3.2/phonebook")
const personById = require("../3.3/person-id")
const personDelete = require("../3.4/person-delete")
const personNew = require("../3.5 & 3.6/person-new")
app.use(bodyParser.json())
app.use(personsList)
app.use(phonebook)
app.use(personById)
app.use(personDelete)
app.use(personNew)

module.exports = app
