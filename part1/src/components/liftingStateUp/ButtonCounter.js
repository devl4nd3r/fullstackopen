import React from "react"

export const ButtonCounter = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}
