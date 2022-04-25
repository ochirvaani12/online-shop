import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Marketplace = () => {
  const [currency, setCurrency] = useState();
  const [currencies, setCurrencies] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/category`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setCurrencies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (currency != null || currency != undefined) {
      axios
        .get(`http://localhost:4000/product/cat/${currency}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:4000/product/all", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          setProducts(response.data.slice(0, 10));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currency]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            marginLeft: "150px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-select-currency"
            select
            label="Ангилал"
            value={currency}
            onChange={handleChange}
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.catId} value={option.catId}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <div className="w-full flex justify-center flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.prodId} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Marketplace;
