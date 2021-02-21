import { useState, useEffect } from "react"
import "./App.css"
import CartItem from "./Components/CartItem"

/**
 * It is better to have this as a variable 
 * so you can decide to either imported from external file/service
 * or reset back to the original 
 * */

 const initialState = [
  {
    id: 1,
    title: "cart item one",
    price: 50,
    description: "Desc for cart item one"
  },
  {
    id: 2,
    title: "cart item two",
    price: 65,
    description: "Desc for cart item two"
  },
  {
    id: 3,
    title: "cart item three",
    price: 45,
    description: "Desc for cart item three"
  },
  {
    id: 4,
    title: "cart item four",
    price: 30,
    description: "Desc for cart item four"
  }
]

function App() {
  const [CartItems, setCartItems] = useState(initialState)
  // ⚡️[Improvement] Lazy initial state 
  const [cartStatus, setCartStatus] = useState(()=>{
    let initialObject = {}
    initialState.forEach(product => {
      initialObject[product.id]={
        quantity:1,
        price:product.price
      }
    })
    return initialObject
  })

  // we need to store the total price for the items
  const [totalPrice, setTotalPrice] = useState(0)

  /**
   * 💣[BUG] Can you spot it?
   * 
   */

  useEffect(() => {
    console.log('%c[Update] App useEffect 🔁', 'color: aqua');

    let total = 0
    for (const item in cartStatus) {
      total += cartStatus[item].quantity * cartStatus[item].price
    }
    setTotalPrice(total)
   
  }, [cartStatus]) // I want to monitor changes in the cartStatus and ....

  /**
   * 💣[BUG] Can you spot it?
   * 
   */
  const handleDelete = x => {
    setCartItems(CartItems.filter(item => item.id != x))
  }

  const handleQuantityChange = ({id, quantity}) => {
    setCartStatus(prevValue => ({
      ...prevValue,
      [id]:{
        quantity,
        price:prevValue[id].price
        }
    }))
  }

  //⚡️[Improvement] 
  //💡 in the map the first argument is the current object from the array
  // and the second is the index where the object is located
  // maybe you can improve the code
  return (
    <div>
    {CartItems.map(
      (x, index) => 
      <CartItem 
        key={CartItems[index].id} 
        id={CartItems[index].id} 
        title={CartItems[index].title} 
        description={CartItems[index].description} 
        price={CartItems[index].price} 
        //No need to create here the arrow function just pass it and let the component use it
        //handleDelete={() => handleDelete(CartItems[index].id)} />
        handleDelete={handleDelete}
        handleQuantityChange={handleQuantityChange}
        cartStatus={cartStatus}
        />
        )}
        <div>Total Price: {totalPrice} </div>
    </div>)
}

export default App
