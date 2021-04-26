import React from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import "../App.css"

const Item = props => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Box boxShadow={3} m={1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography component="div"> Price per unit: {props.price} &hearts; </Typography>
          </Grid>
          <Card>
            <CardMedia component="img" src={props.url} title="dog" className="media-images media-images-cart-item" />
          </Card>
        </Box>
        <Box>
          <Button variant="outlined" color="secondary" onClick={props.handleCartMinus} disabled={props.quantity == 0}>
            -
          </Button>
          <Typography component="span"> {props.quantity} </Typography>
          <Button variant="outlined" color="primary" onClick={props.handleCartPlus}>
            +
          </Button>
        </Box>
      </Grid>
    </>
  )
}

export default Item
