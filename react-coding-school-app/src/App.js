import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuItem from "@material-ui/core/MenuItem"
import HomeSharpIcon from "@material-ui/icons/HomeSharp"
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp"

import "./App.css"

function App() {
  const handleminus = () => {
    console.log("Hello")
  }

  return (
    <>
      <AppBar position="static" color="primary" className="menu-bar">
        <Toolbar className="toolbar">
          <Grid container direction="row" justify="space-between">
            <MenuItem>
              <HomeSharpIcon fontSize="large" />
            </MenuItem>
            <MenuItem>
              <ShoppingCartSharpIcon fontSize="large" />
            </MenuItem>
          </Grid>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3}>
            <Box boxShadow={3}>
              <Card>
                <Typography component="div" align="center">
                  <CardHeader title="Labrador Retriever"></CardHeader>
                </Typography>
                <Typography align="center">500</Typography>
                <CardMedia component="img" src="img/dog.jpg" title="dog" className="media-images" />
                <CardContent> The Labrador Retriever, often abbreviated to Labrador, is a breed of retriever-gun dog from the United Kingdom that was developed from imported Canadian fishing dogs. </CardContent>
                <Grid container direction="row" justify="space-around" alignItems="center">
                  <Button variant="outlined" color="secondary" onClick={handleminus}>
                    -
                  </Button>
                  <div> 0 </div>
                  <Button variant="outlined" color="primary">
                    +
                  </Button>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                  <div className="total-price-area">Total Price</div>
                </Grid>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
