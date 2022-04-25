import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Link,
  Snackbar,
  IconButton,
} from "@mui/material";
import { UserContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const ProductCard = ({ product }) => {
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
    if (!ctxUserId) {
      navigate("/login");
    }

    axios
      .post(
        `http://localhost:4000/cart`,
        {
          userId: ctxUserId,
          prodId: product.prodId,
          count: 1,
          catId: product.catId,
          totalPrice: product.price,
          unitPrice: product.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        handleClick();
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <Link href={`/product/${product.prodId}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <div className="flex justify-between text-black">
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {product.price} MNT
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={() => addToCart()}>
          Сагсанд хийх
        </Button>
      </CardActions>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Сагсанд хийлээ"
        action={action}
      />
    </Card>
  );
};

export default ProductCard;
