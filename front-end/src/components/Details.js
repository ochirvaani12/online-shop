import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";
import { UserContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Details = ({ product, setCount, count, setSavedCount, savedCount }) => {
  const { ctxUserId } = useContext(UserContext);
  let navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const addToCart = () => {
    setSavedCount(count);
    if (!ctxUserId) {
      navigate("/login");
    }
    axios
      .post(
        `http://localhost:4000/cart`,
        {
          userId: ctxUserId,
          prodId: product.prodId,
          count: count,
          catId: product.catId,
          totalPrice: count * product.price,
          unitPrice: product.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        handleClick();
      })
      .then((error) => {
        console.log(error);
      });
  };

  const deductCount = () =>
    setCount((prevCount) => (count === 0 ? 0 : prevCount - 1));

  const addCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className=" w-5/6 px-6 py-4 pb-20 lg:max-w-lg">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-primary lg:mb-6">
        {product.brand}
      </span>

      <h1 className="mb-4 text-3xl font-bold text-tertiary md:text-4xl lg:mb-10 lg:text-5xl">
        {product.name}
      </h1>

      <p className="mb-6 max-w-md text-tertiary-light">{product.description}</p>

      <div className="mb-5 flex items-center justify-between md:justify-start md:gap-8 lg:mb-8 lg:flex-col lg:items-start lg:gap-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">{product.price} MNT</span>
        </div>
      </div>

      <div className="space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
        <div className="flex w-full items-center justify-between rounded-lg bg-secondary-dark p-3 md:basis-8/12 ">
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

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 p-4 font-bold text-white shadow-lg shadow-primary/50 transition-all duration-300 hover:bg-yellow-400/50 "
          onClick={() => addToCart()}
        >
          <ShoppingCartIcon />
          <span>Сагсанд хийх</span>
        </button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Сагсанд хийлээ"
        action={action}
      />
    </div>
  );
};

export default Details;
