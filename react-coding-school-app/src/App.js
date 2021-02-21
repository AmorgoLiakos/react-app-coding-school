import { useState } from "react"
import "./App.css"
import CartItem from "./Components/CartItem"

function App() {
  const [CartItems, setCartItems] = useState([
    {
      id: 1,
      title: "cart item one",
      price: "50",
      description: "Desc for cart item one"
    },
    {
      id: 2,
      title: "cart item two",
      price: "65",
      description: "Desc for cart item two"
    },
    {
      id: 3,
      title: "cart item three",
      price: "45",
      description: "Desc for cart item three"
    },
    {
      id: 4,
      title: "cart item four",
      price: "30",
      description: "Desc for cart item four"
    }
  ])

  const handleDelete = x => {
    setCartItems(CartItems.filter(item => item.id != x))
  }

  return CartItems.map((x, index) => <CartItem key={CartItems[index].id} title={CartItems[index].title} description={CartItems[index].description} price={CartItems[index].price} handleDelete={() => handleDelete(CartItems[index].id)} />)
}

export default App
