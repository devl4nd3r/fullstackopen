import React from "react"
import ReactDOM from "react-dom"
import { Arms } from "./components/complexStates/Arms"
import { Counter } from "./components/Counter"
import { Events } from "./components/Events"
import GuessBornYear from "./components/GuessBornYear"
import InitialPractice from "./components/InitialPractice"

const App = () => {
  // se puede agregar cualquier contenido dentro de la funcion renderizada

  return (
    <>
      <InitialPractice />
      <GuessBornYear name="Sofia" years="9" />
      <Counter />
      <Events />
      <Arms />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
