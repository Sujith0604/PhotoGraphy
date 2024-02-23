import { motion } from "framer-motion";

export default function Container9() {
  const images = [
    { name: "images/MarraigePhotos/13_crystalline.jpg" },
    { name: "images/MarraigePhotos/27c8fd79950baa2f80c9d8ef96977520.jpg" },

    { name: "images/MarraigePhotos/1630225728_800.webp" },
    {
      name: "images/MarraigePhotos/115130-cineloveproductions-305090372-472221081586520-4948258079573148946-n.jpeg",
    },
    { name: "images/MarraigePhotos/a8a7e34bd65b06f15a0833cb610021c6.jpg" },
    { name: "images/MarraigePhotos/beach-wedding-pictures-2.jpg" },
    { name: "images/MarraigePhotos/canon-pro-sanjay-eos-r-1-1140.jpeg" },
    { name: "images/MarraigePhotos/Connor-and-Bec-0817.jpg" },
    { name: "images/MarraigePhotos/destin-beach-wedding-4679.jpg" },
    { name: "images/MarraigePhotos/Inside-image-Wedding-Photographers6.webp" },
    { name: "images/MarraigePhotos/MackenseyAlexanderPhotography-30.jpeg" },
    {
      name: "images/MarraigePhotos/Wedding-Photography-Roswell-GA-683x1024.jpg",
    },
  ];

  const wildImages = [
    { name: "images/Wildlife/david-clode-nyvR6wbU1ho-unsplash.jpg" },
    { name: "images/Wildlife/gwen-weustink-I3C1sSXj1i8-unsplash.jpg" },
    { name: "images/Wildlife/pexels-alex-andrews-2295744.jpg" },
    { name: "images/Wildlife/pexels-callum-hilton-3284268.jpg" },
    { name: "images/Wildlife/pexels-chris-f-2929355.jpg" },
    { name: "images/Wildlife/pexels-edd-sylvia-nenntwich-2664419.jpg" },
    { name: "images/Wildlife/pexels-frans-van-heerden-1912176.jpg" },
    { name: "images/Wildlife/pexels-future-kiiid-3817405.jpg" },
    { name: "images/Wildlife/pexels-george-desipris-2055100.jpg" },
    { name: "images/Wildlife/pexels-ishara-kasthuriarachchi-605223.jpg" },
    { name: "images/Wildlife/pexels-jonas-von-werne-3354346.jpg" },
    { name: "images/Wildlife/pexels-pixabay-357783.jpg" },
  ];

  return (
    <div className=" flex flex-col gap-10">
      <h1 className=" text-center font-Heading md:text-[60px] tracking-widest">
        SOME OF OUR WEDDING AND PREWEDDING PHOTOSHOOTS
      </h1>
      <div className=" flex justify-around gap-10 flex-wrap">
        {images?.map((image) => (
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              ease: "easeIn",
            }}
            className=" md:h-[500px]"
            key={image.name}
            src={image.name}
          />
        ))}
      </div>
      <h1 className=" text-center font-Heading md:text-[60px] tracking-widest">
        SOME OF OUR WILDLIFE PHOTOGRAPHS
      </h1>
      <div className=" flex justify-around gap-10 flex-wrap">
        {wildImages?.map((image) => (
          <img className=" md:h-[500px]" src={image.name} key={image.name} />
        ))}
      </div>
    </div>
  );
}
