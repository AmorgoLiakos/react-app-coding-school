import React, { useContext } from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuItem from "@material-ui/core/MenuItem"
import HomeSharpIcon from "@material-ui/icons/HomeSharp"
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"

const Menu = props => {
  return (
    <AppBar position="static" color="primary" className="menu-bar">
      <Toolbar className="toolbar">
        <Grid container direction="row" justify="space-between">
          <MenuItem>
            <Link to="/">
              <HomeSharpIcon fontSize="large" />
            </Link>
          </MenuItem>
          <MenuItem className="total-price-area-menu">
            <Typography variant="h4">Total Price at Cart: {props.TotalPrice}</Typography>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <ShoppingCartSharpIcon fontSize="large" />
            </Link>
          </MenuItem>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
