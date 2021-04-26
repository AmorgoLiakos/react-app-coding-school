import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Menu from "./Components/Menu"
import Dog from "./Components/Dog"
import CartPage from "./Components/CartPage"

import TotalPriceContext from "./TotalPriceContext"
import CartItemsContext from "./CartItemsContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"

function App() {
  const initialState = [
    {
      id: 1,
      name: "Labrador Retriever",
      price: "500",
      description: "The Labrador Retriever, often abbreviated to Labrador, is a breed of retriever-gun dog from the United Kingdom that was developed from imported Canadian fishing dogs.",
      imageURL: "img/labrador.jpg",
      quantity: 0
    },
    {
      id: 2,
      name: "Husky",
      price: "600",
      description: "A husky is a sled dog used in the polar regions. One can differentiate huskies from other dog types by their fast pulling-style. They represent an ever-changing crossbreed of the fastest dogs[.",
      imageURL: "img/husky.jpg",
      quantity: 0
    },
    {
      id: 3,
      name: "German Shepherd",
      price: "700",
      description: "The German Shepherd (German: Deutscher Schäferhund, German pronunciation: [ˈdɔʏtʃɐ ˈʃɛːfɐˌhʊnt]) is a breed of medium to large-sized working dog that originated in Germany.",
      imageURL: "img/sheperd.jpg",
      quantity: 0
    }
  ]

  const [dogs, setDogs] = useState(initialState)

  const handleMinus = index => {
    let prevDogs = [...dogs]
    let dogToChangeQuantity = { ...prevDogs[index] }

    dogToChangeQuantity.quantity = dogToChangeQuantity.quantity - 1
    prevDogs[index] = dogToChangeQuantity

    setDogs(prevDogs)
  }

  const handlePlus = index => {
    let prevDogs = [...dogs]
    let dogToChangeQuantity = { ...prevDogs[index] }

    dogToChangeQuantity.quantity = dogToChangeQuantity.quantity + 1
    prevDogs[index] = dogToChangeQuantity

    setDogs(prevDogs)
  }

  const [CartItems, setCartItems] = useState([])

  const AddToCart = x => {
    let newCart = [...CartItems]
    let newItem = dogs.find(dog => dog.id === x)

    newCart.push(newItem)
    setCartItems(newCart)
  }

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let sum = 0
    for (let i = 0; i < dogs.length; i++) {
      sum = sum + dogs[i].quantity * dogs[i].price
    }
    setTotalPrice(sum)
  }, [dogs])

  return (
    <TotalPriceContext.Provider value={[totalPrice, setTotalPrice]}>
      <CartItemsContext.Provider value={[CartItems, setCartItems]}>
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact>
              <Container maxWidth="lg">
                <Grid container spacing={3}>
                  {dogs.map((dog, index) => (
                    <Dog name={dogs[index].name} url={dogs[index].imageURL} price={dogs[index].price} description={dogs[index].description} handleMinus={() => handleMinus(index)} key={dogs[index].id} quantity={dogs[index].quantity} handlePlus={() => handlePlus(index)} addToCart={() => AddToCart(dogs[index].id)} />
                  ))}
                </Grid>
              </Container>
            </Route>
            <Route path="/cart" component={CartPage} />
          </Switch>
        </Router>
      </CartItemsContext.Provider>
    </TotalPriceContext.Provider>
  )
}

export default App
