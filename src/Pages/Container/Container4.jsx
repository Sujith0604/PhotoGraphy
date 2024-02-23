import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Container4() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "images/Wildlife/pexels-pixabay-459449.jpg",
    "images/Wildlife/david-clode-nyvR6wbU1ho-unsplash.jpg",
    "images/Wildlife/gwen-weustink-I3C1sSXj1i8-unsplash.jpg",
    "images/Wildlife/zdenek-machacek-UxHol6SwLyM-unsplash.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" flex flex-col gap-10 ">
      <div className=" h-[300px] flex items-center ">
        <span className=" text-[30px]  md:text-[60px] font-Heading ">
          WILDLIFE PHOTOGRAPHY AND FILMS THAT CAPTURE THE WILD AND THEIR LIFE IN
          THE WAY THEY LIVE
        </span>
      </div>

      <div className=" flex gap-10 flex-col md:flex-row  w-[100%]">
        <div className=" flex items-center justify-center md:w-[50%]">
          <motion.img
            whileHover={{ scale: 1.1 }}
            className=" h-[600px]"
            src="images/Wildlife/pexels-george-desipris-2055100.jpg"
          />
        </div>

        <div className="text-justify leading-loose  flex items-center md:w-[50%] text-[15px]">
          Wildlife photography is a genre of photography that records the life
          of animals in their natural settings, like in a forest or underwater.
          So, wildlife photography often constitutes the images of animals in
          movement or action such as eating, fighting, or in flight. It also
          covers various organisms, including mammals, insects, plants,
          reptiles, rodents, and other invertebrates.
        </div>
      </div>

      <div className=" flex justify-around gap-10 flex-wrap">
        <div className=" flex items-center justify-center relative text-white">
          <img
            className="  md:h-[600px]"
            src="images/Wildlife/pexels-pixabay-357783.jpg"
          />
          <div className=" absolute flex flex-col items-center font-Quotes text-xl md:text-2xl justify-center top-5 left-11 md:left-[80px] ">
            <h1>Animal, Nature and Wildlife</h1>
            <p> photographer & video grapher</p>
          </div>
          <div className=" absolute flex flex-col items-center justify-center font-Quotes bottom-4 text-xl md:bottom-5 md:right-[150px]">
            <h1>Capturing Wildlife's</h1>
            <hr />
            <p>Since 2005</p>
          </div>
        </div>

        <div className=" flex items-center flex-col gap-2 justify-center">
          <img className=" md:w-[900px]" src={images[currentIndex]} />
          <div>
            <NavLink to="/work" className="underline">
              View our work
            </NavLink>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            className="  md:h-[600px]"
            src="images/Wildlife/pexels-ishara-kasthuriarachchi-605223.jpg"
          />
        </div>

        <div className=" flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            className="  md:h-[600px]"
            src="images/Wildlife/pexels-vicky-deshmukh-1431465.jpg"
          />
        </div>
      </div>
    </div>
  );
}
