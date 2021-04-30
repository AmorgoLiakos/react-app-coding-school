import React, { useContext, useEffect } from "react"
import CartItem from "./CartItem"
import CartItemsContext from "../CartItemsContext"
import TotalPriceContext from "../TotalPriceContext"

import Container from "@material-ui/core/Container"

const CartPage = () => {
  const [CartItemsTotal, setCartItemsTotal] = useContext(CartItemsContext)
  const [TotalPrice, setTotalPrice] = useContext(TotalPriceContext)

  const handleCartMinus = index => {
    let prevCartDogs = [...CartItemsTotal]
    let dogCartItemToChangeQuantity = { ...prevCartDogs[index] }

    dogCartItemToChangeQuantity.quantity = dogCartItemToChangeQuantity.quantity - 1
    prevCartDogs[index] = dogCartItemToChangeQuantity

    setCartItemsTotal(prevCartDogs)
  }

  const handleCartPlus = index => {
    let prevCartDogs = [...CartItemsTotal]
    let dogCartItemToChangeQuantity = { ...prevCartDogs[index] }

    dogCartItemToChangeQuantity.quantity = dogCartItemToChangeQuantity.quantity + 1
    prevCartDogs[index] = dogCartItemToChangeQuantity

    setCartItemsTotal(prevCartDogs)
  }

  useEffect(() => {
    let sum = 0
    CartItemsTotal.forEach(x => (sum = sum + x.quantity * x.price))
    setTotalPrice(sum)
  }, [CartItemsTotal])

  const handleDeleteCartItem = index => {
    setCartItemsTotal(prevCartDogs => {
      let prevCartDogsItems = [...prevCartDogs]

      prevCartDogsItems.splice(index, 1)
      return prevCartDogsItems
    })
  }

  return (
    <Container>
      {CartItemsTotal.map((item, index) => (
        <CartItem key={item.id} url={item.imageURL} quantity={item.quantity} price={item.price} handleCartMinus={() => handleCartMinus(index)} handleCartPlus={() => handleCartPlus(index)} handleDeleteCartItem={() => handleDeleteCartItem(index)} />
      ))}
    </Container>
  )
}

export default CartPage
