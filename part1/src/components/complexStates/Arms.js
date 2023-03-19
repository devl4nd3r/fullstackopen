import React, { useState } from "react"
import { History } from "./History"

export const Arms = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAll] = useState([])

  const addLeftClick = () => {
    setAll(allClicks.concat("L"))
    setClicks({
      left: clicks.left + 1,
      ...clicks,
    })
  }

  const addRightClick = () => {
    setAll(allClicks.concat("R"))
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    })
  }

  return (
    <>
      Arms
      <p>Left: {clicks.left}</p>
      <button onClick={addLeftClick}>Left</button>
      <p>Right: {clicks.right}</p>
      <button onClick={addRightClick}>Right</button>
      <History clicks={allClicks} />
      <hr size="2px" color="gray" />
    </>
  )
}
