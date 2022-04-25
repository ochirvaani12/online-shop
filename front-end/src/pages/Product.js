import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Product = () => {
  let { prodId } = useParams();
  const [product, setProduct] = useState({});

  const [count, setCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/${prodId}`, {
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

  return (
    <>
      <Navbar />
      {product ? (
        <main className="lg:mt-20 lg:flex lg:items-center lg:justify-center lg:gap-24 lg:px-12">
          <Slider prodId={prodId} />

          <Details
            product={product}
            count={count}
            setCount={setCount}
            setSavedCount={setSavedCount}
            savedCount={savedCount}
          />
        </main>
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
};

export default Product;
