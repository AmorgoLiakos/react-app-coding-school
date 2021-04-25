import React, { useState, useContext } from "react"
import CartItem from "./CartItem"
import CartItemsContext from "../CartItemsContext"

const CartPage = () => {
  let CartItemsTotal = useContext(CartItemsContext)

  return CartItemsTotal.map((item, index) => <CartItem key={item.id} />)
}

export default CartPage
