import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Menu from "./Components/Menu"
import Dog from "./Components/Dog"

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

  return (
    <>
      <Menu />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {dogs.map((dog, index) => (
            <Dog name={dogs[index].name} url={dogs[index].imageURL} price={dogs[index].price} description={dogs[index].description} handleMinus={() => handleMinus(index)} key={dogs[index].id} quantity={dogs[index].quantity} handlePlus={() => handlePlus(index)} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default App
