import { useState } from "react"
import "./App.css"
import CartItem from "./Components/CartItem"

function App() {
  const [CartItems, setCartItems] = useState([
    {
      title: "cart item one",
      price: "50",
      description: "Desc for cart item one"
    },
    {
      title: "cart item two",
      price: "65",
      description: "Desc for cart item two"
    },
    {
      title: "cart item three",
      price: "45",
      description: "Desc for cart item three"
    },
    {
      title: "cart item four",
      price: "30",
      description: "Desc for cart item four"
    }
  ])

  return CartItems.map((x, index) => <CartItem title={CartItems[index].title} description={CartItems[index].description} price={CartItems[index].price} />)
}

export default App
