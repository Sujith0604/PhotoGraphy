import { useEffect, useState } from "react";

export default function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "images/MarraigePhotos/13_crystalline.jpg",
    "images/MarraigePhotos/115130-cineloveproductions-305090372-472221081586520-4948258079573148946-n.jpeg",
    "images/MarraigePhotos/beach-wedding-pictures-2.jpg",
    "images/MarraigePhotos/Connor-and-Bec-0817.jpg",
    "images/MarraigePhotos/Inside-image-Wedding-Photographers6.webp",
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
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" flex items-center justify-center">
      <img className=" md:h-[800px] " src={images[currentIndex]} />
    </div>
  );
}
