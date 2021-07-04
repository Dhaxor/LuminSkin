import React, { useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography, Button } from "@material-ui/core";
import productImg from "./assets/product.png";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InputBase from "@material-ui/core/InputBase";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Paper from "@material-ui/core/Paper";
export default function SideBar(props) {
  const { onAdd } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={props.data}
      onClose={props.close}
      onOpen={() => {}}
    >
      <div style={classes.side}>
        <Grid container style={classes.main}>
          <Grid item md={5} style={{ paddingLeft: "3%", paddingTop: "3%" }}>
            <Box style={classes.ImageWrapper}>
              <ArrowBackIosIcon style={{ width: "10px" }} />
            </Box>
          </Grid>
          <Grid item md={7}>
            <Typography>Your Cart</Typography>
          </Grid>

          <Grid item md={12}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="demo-customized-select-native">
                Age
              </InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>
          </Grid>

          {console.log(onAdd)}
          {/* {props.cart.map(res =>  ( */}
          <Grid item md={12}>
            <div style={classes.cartItem}>
              <Grid container>
                <Grid item md={6} style={classes.CartLeft}>
                  {/* <Typography>{cart.title}</Typography> */}
                  <div style={{ fontSize: "10px" }}>Combination | 25-34</div>
                  <div style={{ fontSize: "10px" }}>
                    One time purchase of Two Month supply.
                  </div>
                  <div style={classes.buttonGroup}>
                    <ButtonGroup>
                      <Button
                        aria-label="reduce"
                        style={{ borderRight: "none", width: "40px" }}

                        //   onClick={() => {
                        //     setCount(Math.max(count - 1, 0));
                        //   }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Button
                        aria-label="increase"
                        style={{ borderLeft: "none", width: "40px" }}

                        //   onClick={() => {
                        //     setCount(count + 1);
                        //   }}
                      >
                        1
                      </Button>
                      <Button
                        aria-label="increase"
                        style={{ borderLeft: "none", width: "40px" }}
                        //   onClick={() => {
                        //     setCount(count + 1);
                        //   }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  </div>
                </Grid>

                <Grid item md={6}>
                  <Typography style={classes.closeCartItem}>X</Typography>
                  <img
                    src={productImg}
                    alt="productImg"
                    height={50}
                    width={100}
                    style={classes.productImg}
                  />
                  {/* <span>${cart.price}</span> */}
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* ))} */}
        </Grid>

        <div item md={12} style={classes.checkout}>
          <Paper
            elevation={5}
            style={{
              height: "30vh",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px",
            }}
          >
            <Grid container>
              <Grid item md={6}>
                <Typography>SubTotal</Typography>
              </Grid>

              <Grid item md={6} style={classes.subtotal}>
                <Typography>$0</Typography>
              </Grid>

              <Grid item md={12} style={classes.subtotal}>
                <Typography>every 2 months</Typography>
              </Grid>

              <Grid item md={12}>
                <Button
                  disableElevation
                  variant="contained"
                  style={classes.checkoutBtnOne}
                >
                  Revert to one time purchase
                </Button>
              </Grid>

              <Grid item md={12}>
                <Button
                  disableElevation
                  variant="contained"
                  style={classes.checkoutBtnTwo}
                >
                  Proceed to checkout
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

const useStyles = () => ({
  side: {
    width: "40vw",
    backgroundColor: "#F5F5F4",
    height: "100%",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    position: "relative",
  },
  subtotal: {
    display: "flex",
    justifyContent: "flex-end",
  },
  checkout: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    Boxshadow: "3px 3px 5px 6px #ccc",
    // backgroundColor: "#F5F5F4",
    // paddingLeft:'10px'

    //   Boxshadow: "0px -4px 3px rgba(50, 50, 50, 0.75)",
  },
  checkoutBtnOne: {
    backgroundColor: "#fff",
    border: "1px solid #000",
    width: "100%",
    height: "40px",
    marginTop: "5px",
  },
  checkoutBtnTwo: {
    backgroundColor: "#4B5548",
    color: "#fff",
    width: "100%",
    height: "40px",
    marginTop: "5px",
  },
  productImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ImageWrapper: {
    backgroundColor: "#F5F5F4",
    width: "30px",
    height: "30px",
    border: "1px solid #4B5548",
    textAlign: "center",
    borderRadius: "50%",
  },
  cartItem: {
    backgroundColor: "#fff",
    height: "25vh",
    marginTop: "10px",
  },
  CartLeft: {
    paddingTop: "8px",
    paddingLeft: "10px",
  },
  buttonGroup: {
    height: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  closeCartItem: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    paddingTop: "7px",
  },
  productBtn: {
    backgroundColor: "#4B5548",
    color: "#fff",
    width: "100%",
    height: "50px",
  },
});
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
