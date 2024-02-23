import { motion } from "framer-motion";
export default function Container8() {
  return (
    <div className=" flex md:flex-row flex-col items-center justify-center gap-10 w-[100%] h-fit p-4 ">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          ease: "easeIn",
          delay: 0.5,
        }}
        className=" flex flex-col justify-center items-center md:w-[50%] gap-10 "
      >
        <h1 className=" font-Heading tracking-widest text-xl text-center">
          Documentary Wedding Photographer & Filmmaker
        </h1>
        <p className=" text-xl text-center tracking-widest font-Quotes">
          A LITTLE ABOUT MY JOURNEY
        </p>
        <div className=" flex w-[100%] gap-10 font-Paragraph text-center">
          <div className=" flex w-[50%]">
            About five years ago, wedding photography caught my attention in an
            unexpected way. I was going to be an
            industrial/electronics metal/musician at the time, and I was going
            by the name tech. But I started assisting my partner in his
            independent Wildlife photography venture, and I soon found myself
            falling deeply and completely in love with it. So I decided to do
            wedding photographs.
          </div>
          <div className=" flex w-[50%]">
            After working for several years as a fine art documentary wedding
            photographer, I've come to the conclusion that my favorite aspects
            of this strange and amazing career aren't the creative or business
            aspects. It's the chance to bond over one of the most significant
            days of their lives with amazing, diverse couples from all around
            the world. I'm incredibly appreciative and excited to start this
            journey with you.
          </div>
        </div>
        <div>
          <button className=" font-serif p-4 bg-red-300">REACH OUT</button>
        </div>
      </motion.div>
      <div className=" flex items-center justify-center md:w-[50%] h-full ">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            ease: "easeIn",
          }}
          src="images/MarraigePhotos/27c8fd79950baa2f80c9d8ef96977520.jpg"
        />
      </div>
    </div>
  );
}
