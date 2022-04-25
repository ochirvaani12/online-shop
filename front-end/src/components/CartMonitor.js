import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

const CartMonitor = ({ selectedCarts, sensor, setSensor }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    let totalCost = 0;
    let cartIds = [];
    for (let i = 0; i < selectedCarts.length; i++) {
      totalCost += selectedCarts[i].totalPrice;
      cartIds.push(selectedCarts[i].cartId);
    }
    setTotalPrice(totalCost);
    setCarts(cartIds);
  }, [selectedCarts]);

  const addOrder = () => {
    axios
      .post(
        `http://localhost:4000/order`,
        {
          cartIds: carts,
          address: "asdasda",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setSensor(!sensor);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
        Захиалга үүсгэх
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Хаяг"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Хот"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Аймаг/дүүрэг"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal код"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ margin: "20px" }}
          >
            Нийт үнэ: {totalPrice} MNT
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            size="big"
            color="primary"
            onClick={() => addOrder()}
          >
            Захиалах
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CartMonitor;
