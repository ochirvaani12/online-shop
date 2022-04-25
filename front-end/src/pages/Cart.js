import React, { useContext, useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import CartMonitor from "../components/CartMonitor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { ctxUserId } = useContext(UserContext);
  let navigate = useNavigate();

  const [carts, setCarts] = useState([]);
  const [selectedCarts, setSelectedCarts] = useState([]);
  const [sensor, setSensor] = useState(false);

  useEffect(() => {
    if (!ctxUserId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:4000/cart/${ctxUserId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCarts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sensor]);

  return (
    <>
      <Navbar />
      <div className="w-full block sm:flex" style={{ minHeight: "500px" }}>
        <div className="w-3/5 flex flex-col items-center">
          {carts.map((cart) => (
            <CartCard
              cart1={cart}
              selectedCarts={selectedCarts}
              setSelectedCarts={setSelectedCarts}
              sensor={sensor}
              setSensor={setSensor}
            />
          ))}
        </div>
        <div className="w-2/5">
          <CartMonitor
            selectedCarts={selectedCarts}
            sensor={sensor}
            setSensor={setSensor}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
