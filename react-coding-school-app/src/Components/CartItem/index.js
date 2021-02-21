import React, { useState, useEffect } from "react"
import ProductQuantity from '../ProductQuantity'
import "./CartItem.css"

// handleQuantityChange={handleQuantityChange}
// cartStatus={cartStatus}
// 💡 we have learned something about destructuring!
const CartItem = props => {
  const [quantity, setQuantity] = useState(0)

  /**
   * ⚡️[Improvement] check the App.js
   * We use the effect when we need to make a change
   * Here we need to trigger a change or an effect when the user
   * add more items so will use the useEffect, now we need to see when we want this effect to run.
   * 
   * We want this to run after we either delete/add a product or we change the quantity of it.
   * Also we need to have the sum of all other prices + quantities to so the correct total price.
   * We can try to lift the state and use the lifecycle
   */


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

      {/** 
       * You lift the state up and you make the component
       * to be a presentational only component 
       * */}
      <ProductQuantity 
        handleMinus={props.handleQuantityChange}
        quantity={quantity} 
        handlePlus={props.handleQuantityChange}
        cartStatus={props.cartStatus}
        id={props.id}
      />

      <div className="total-price">
        <h3>{props.cartStatus[props.id].quantity * props.cartStatus[props.id].price}</h3>
      </div>

      <div className="delete-button">
        <button onClick={()=> props.handleDelete(props.id)}> X </button>
      </div>
    </div>
  )
}

export default CartItem
