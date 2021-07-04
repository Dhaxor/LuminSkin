import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import productImg from "./assets/product.png";
import SideBar from "./SideBar";
import { client } from "./index";
import { useQuery, gql } from "@apollo/client";

export default function ProductList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [displaySideBar, setDisplaySideBar] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [cartItem, setCartItem] = React.useState([]);
  // const [productsOption, setProductsOption] = React.useState([]);
  // const { loading, error, data } = useQuery(products);

  useEffect(() => {
    client
      .query({
        query: gql`
          query GetProducts {
            products {
              id
              title
              image_url
              price(currency: USD)
              product_options {
                title
                prefix
                suffix
                options {
                  id
                  value
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setProducts(result.data.products);
        console.log(products);
      })
      .catch((err) => console.log(err));
  }, [products]);

  const onAdd = (product) => {
    const exist = [product].find((x) => x.id === product.id);
    console.log(exist);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setProducts([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const display = () => {
    setDisplaySideBar(!displaySideBar);
    console.log(displaySideBar);
  };
  const closeDrawer = () => {
    setOpen(false);
    setDisplaySideBar(false);
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <div style={classes.Header}>
      {displaySideBar === true && (
        <SideBar data={open} onAdd={cartItem} close={closeDrawer} />
      )}

      <Grid
        container
        className={classes.Header__container}
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {products.map((result, index) => (
          <Grid item md={4} sm={6} style={classes.product} key={result.id}>
            <img
              src={result.image_url}
              alt="Product"
              width={150}
              height={150}
              style={{ height: "150px" }}
            />
            <Typography>{result.title}</Typography>
            <Typography align="center">${result.price}</Typography>
            <Button
              variant="contained"
              style={classes.productBtn}
              disableElevation
              onClick={() => {
                setOpen(true);
                display();
                // setProduct(result);
                onAdd(result);
              }}
            >
              Add to Cart
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const useStyles = () => ({
  Header: {
    // height: "60vh",
    backgroundColor: "#E2E6E3",
    // paddingTop:'35px'
  },
  Header__container: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "35px",
  },
  productBtn: {
    backgroundColor: "#4B5548",
    color: "#fff",
    textTransform: "none",
  },
});
