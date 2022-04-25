import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

const Slider = ({ prodId }) => {
  const [currImg, setCurrImg] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/prod-image/${prodId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        let imgs = [];
        response.data.forEach((data) => imgs.push(data.image));
        setImages(imgs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const prevImg = () =>
    setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);

  const nextImg = () =>
    setCurrImg(currImg >= images.length - 1 ? 0 : currImg + 1);

  return (
    <div className="relative lg:max-w-md">
      <button
        type="button"
        className="absolute left-4 top-[40%] flex aspect-square w-10 items-center justify-center rounded-full bg-white lg:-left-8 lg:top-[32%] lg:w-20"
        onClick={prevImg}
      >
        <ArrowBackIosIcon className="absolute top-1/2 left-1/2 h-fit max-w-full -translate-x-2 -translate-y-1/2" />
      </button>

      <img
        src={images[currImg]}
        alt="shoes"
        className="block w-full max-w-full lg:rounded-xl"
      />

      <button
        type="button"
        className=" absolute right-4 top-[40%] flex aspect-square w-10 items-center justify-center rounded-full bg-white lg:-right-8 lg:top-[32%] lg:w-20"
        onClick={nextImg}
      >
        <ArrowForwardIosIcon className="fit-w-full absolute top-1/2 left-1/2 h-fit -translate-x-1.5 -translate-y-1/2" />
      </button>

      <div className="hidden md:my-8 md:flex md:w-full md:items-center md:justify-evenly lg:justify-between">
        {images.map((image, index) => (
          <div
            key={image}
            className={`rounded-xl ${
              index === currImg && "outline outline-primary"
            }`}
          >
            <img
              src={image}
              alt="shoes"
              className={`w-32 rounded-lg transition-all duration-300 hover:cursor-pointer hover:opacity-40 lg:w-[88px] ${
                index === currImg && "opacity-40"
              }`}
              onClick={() => setCurrImg(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
