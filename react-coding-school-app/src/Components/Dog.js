import React from "react"

import Grid from "@material-ui/core/Grid"

import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"

const Dog = props => {
  return (
    <Grid item xs={12} sm={3}>
      <Box boxShadow={3}>
        <Card>
          <Typography component="div" align="center">
            <CardHeader title={props.name}></CardHeader>
          </Typography>
          <Typography align="center">{props.price} &hearts; </Typography>
          <CardMedia component="img" src={props.url} title="dog" className="media-images" />
          <CardContent> {props.description} </CardContent>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Button variant="outlined" color="secondary" onClick={props.handleMinus} disabled={props.quantity == 0}>
              -
            </Button>
            <div> {props.quantity} </div>
            <Button variant="outlined" color="primary" onClick={props.handlePlus}>
              +
            </Button>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <div className="total-price-area">{props.quantity * props.price} &hearts; </div>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
              <Typography component="div" align="center">
                Add to cart
              </Typography>
            </IconButton>
          </Grid>
        </Card>
      </Box>
    </Grid>
  )
}

export default Dog
