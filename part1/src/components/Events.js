import React, { useState } from "react"
import { DisplayCounter } from "./liftingStateUp/DisplayCounter"
import { ButtonCounter } from "./liftingStateUp/ButtonCounter"

export const Events = () => {
  const [contador, setContador] = useState(0)

  const increaseByOne = () => setContador(contador + 1)
  const resetValue = () => setContador(0)

  return (
    <div>
      <p>Events</p>
      <DisplayCounter contador={contador} />
      <ButtonCounter handleClick={increaseByOne} text={"+1"} />
      <ButtonCounter handleClick={resetValue} text={"reset"} />
      <hr size="2px" color="gray" />
    </div>
  )
}
