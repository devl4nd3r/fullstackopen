import React, { useState } from "react"

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  setTimeout(() => {
    setCounter(counter + 1)
  }, 1000)
  console.log("rendering...", counter)
  return (
    <div>
      <p>Contardor de segundos: {counter}</p>
      <hr size="2px" color="gray" />
    </div>
  )
}
