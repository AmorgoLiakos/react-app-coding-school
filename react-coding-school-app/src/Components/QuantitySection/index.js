import React, { useState } from "react"
import "./quantitySection.css"

const QuantitySection = () => {
  const [quantity, setQuantity] = useState(0)

  const handleMinus = () => {
    setQuantity(quantity - 1)
  }

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  return (
    <>
      <button onClick={handleMinus}>-</button>
      <div id="quantity">{quantity}</div>
      <button onClick={handlePlus}>+</button>
    </>
  )
}

export default QuantitySection
