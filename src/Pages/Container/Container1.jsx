import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Container1() {
  const images = [
    "images/MarraigePhotos/13_crystalline.jpg",
    "images/MarraigePhotos/115130-cineloveproductions-305090372-472221081586520-4948258079573148946-n.jpeg",
    "images/MarraigePhotos/beach-wedding-pictures-2.jpg",
    "images/MarraigePhotos/destin-beach-wedding-4679.jpg",
    "images/MarraigePhotos/canon-pro-sanjay-eos-r-1-1140.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
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
          WEDDING PHOTOGRAPHY AND FILMS THAT CAPTURE YOUR STORY THE WAY YOU
          LIVED IT
        </span>
      </div>

      <div className=" flex gap-10 flex-col md:flex-row  w-[100%]">
        <div className=" flex items-center justify-center md:w-[50%]">
          <motion.img
            whileHover={{ scale: 1.1 }}
            className=" h-[600px]"
            src="images/MarraigePhotos/1630225728_800.webp"
          />
        </div>

        <div className=" text-justify leading-loose flex items-center md:w-[50%] text-[17px] font-Paragraph">
          It is right that your narrative be told in a way that resonates with
          you. Your discovery of your mirror soul, or twin flame, is something
          that should be captured on camera and preserved for all time. I want
          to document this relationship and present your narrative as
          authentically as possible. In this manner, you will be able to recall
          it precisely as you experienced it in 10, 20, or even 50 years.
        </div>
      </div>

      <div className=" flex justify-around gap-10 flex-wrap">
        <div className=" flex items-center justify-center relative text-white">
          <img
            className="  md:h-[600px]"
            src="images/MarraigePhotos/Wedding-Photography-Roswell-GA-683x1024.jpg"
          />
          <div className=" absolute flex flex-col items-center font-Quotes text-xl  text-center justify-center top-5 left-11 md:left-[75px] ">
            <h1>Fine Art and documentary wedding</h1>
            <p> photographer & video grapher</p>
          </div>
          <div className=" absolute flex flex-col items-center justify-center bottom-4 md:bottom-5 font-Quotes md:right-[90px]">
            <h1>Capturing Weddings & Love Stories</h1>
            <hr />
            <p>Since 2005</p>
          </div>
        </div>

        <div className=" flex items-center flex-col gap-2 justify-center">
          <img
            className=" md:w-[900px] md:h-[600px]"
            src={images[currentIndex]}
          />
          <div>
            <NavLink to="/work" className=" font-serif underline">
              View our work
            </NavLink>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            className="  md:h-[600px]"
            src="images/MarraigePhotos/a8a7e34bd65b06f15a0833cb610021c6.jpg"
          />
        </div>
      </div>
    </div>
  );
}
