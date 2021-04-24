import React, { useContext } from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuItem from "@material-ui/core/MenuItem"
import HomeSharpIcon from "@material-ui/icons/HomeSharp"
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp"
import Grid from "@material-ui/core/Grid"
import TotalPriceContext from "../TotalPriceContext"

const Menu = () => {
  const TotalPrice = useContext(TotalPriceContext)
  return (
    <AppBar position="static" color="primary" className="menu-bar">
      <Toolbar className="toolbar">
        <Grid container direction="row" justify="space-between">
          <MenuItem>
            <HomeSharpIcon fontSize="large" />
          </MenuItem>
          <MenuItem>
            <h3> Total Price = {TotalPrice} &hearts;</h3>
          </MenuItem>
          <MenuItem>
            <ShoppingCartSharpIcon fontSize="large" />
          </MenuItem>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
