import React from "react"

export const History = ({ clicks }) => {
  if (clicks.length === 0) {
    return <p>Historial con valor inicial 0</p>
  }

  return <p>{clicks.join(" ")}</p>
}
