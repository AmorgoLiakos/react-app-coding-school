import React, { useState } from "react"
import "./CartItem.css"

const CartItem = props => {
  const [quantity, setQuantity] = useState(0)

  const handleMinus = () => {
    setQuantity(quantity - 1)
  }

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src="https://picsum.photos/300/300" alt="featIamge" />
      </div>

      <div className="description">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h2>{props.price} €</h2>
      </div>

      <div className="quantity">
        <button onClick={handleMinus}>-</button>
        <div id="quantity">{quantity}</div>
        <button onClick={handlePlus}>+</button>
      </div>

      <div className="total-price">
        <h3>{quantity * props.price}</h3>
      </div>

      <div className="delete-button">
        <button onClick={props.handleDelete}> X </button>
      </div>
    </div>
  )
}

export default CartItem
