import { Button, Checkbox, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";
import axios from "axios";

const CartCard = ({
  cart1,
  selectedCarts,
  setSelectedCarts,
  sensor,
  setSensor,
}) => {
  const [product, setProduct] = useState();
  const [cart, setCart] = useState(cart1);

  const deleteCart = () => {
    axios
      .delete(`http://localhost:4000/cart/${cart.cartId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSensor(!sensor);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectCart = (e) => {
    if (e.target.checked) {
      setSelectedCarts((prev) => [...prev, cart]);
    } else {
      const newSelectedCarts = selectedCarts.filter(
        (selectedCart) => selectedCart.cartId !== cart.cartId
      );
      setSelectedCarts(newSelectedCarts);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/${cart.prodId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [count, setCount] = useState(cart.count);
  const deductCount = () => {
    setCount((prevCount) => (count === 0 ? 0 : prevCount - 1));
  };
  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    setCart((prev) => ({
      ...prev,
      count: count,
      totalPrice: count * prev.unitPrice,
    }));
  }, [count]);

  return (
    <div className=" w-4/5 h-44 flex flex-col justify-around border-2 border-black my-8">
      <div className="w-full flex justify-between">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ marginLeft: "20px" }}
        >
          {product ? product.name : <></>}
        </Typography>
        <Checkbox
          sx={{ marginRight: "20px" }}
          onClick={(e) => {
            selectCart(e);
          }}
        />
      </div>
      <div className="flex w-full h-4 items-center text-sm ml-5">
        <div>Үнэ: {cart.unitPrice} MNT</div>
        <div className="flex w-1/5 items-center justify-between rounded-lg bg-secondary-dark p-3 ">
          <button
            type="button"
            onClick={deductCount}
            className="p-3 transition-all duration-300 hover:opacity-50 lg:px-1"
          >
            <MinusIcon />
          </button>

          <span className="font-bold">{count}</span>

          <button
            type="button"
            onClick={addCount}
            className="p-3 transition-all duration-300 hover:opacity-50 lg:px-1"
          >
            <AddIcon />
          </button>
        </div>
        <div className="ml-5">Нийт үнэ: {cart.totalPrice} MNT</div>
      </div>
      <Button
        size="small"
        variant="outlined"
        color="error"
        sx={{ marginLeft: "20px", width: "120px" }}
        onClick={() => deleteCart()}
      >
        Устгах
      </Button>
    </div>
  );
};

export default CartCard;
