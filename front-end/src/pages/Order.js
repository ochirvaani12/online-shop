import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OrderList from "../components/OrderList";
import { UserContext } from "../context/auth";
import axios from "axios";

const Order = () => {
  const { ctxUserId } = useContext(UserContext);
  let navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!ctxUserId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:4000/order/${ctxUserId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <OrderList orders={orders} />
      <Footer />
    </>
  );
};

export default Order;
