import { motion } from "framer-motion";
export default function Container10() {
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
          Documentary Wild-Life Photographer & Filmmaker
        </h1>
        <p className=" text-xl text-center tracking-widest font-Quotes">
          A LITTLE ABOUT MY JOURNEY
        </p>
        <div className=" flex w-[100%] gap-10 font-Paragraph text-center">
          <div className=" flex w-[50%]">
            I discovered wildlife photography about 5 years ago when I least
            expected it. At the time, I was pursuing a career as an software
            engineer in facebook . However, I found myself helping my former
            friend with his personal wildlife photography business, only to
            slowly fall totally and completely in love with it.
          </div>
          <div className=" flex w-[50%]">
            Over the years of being a documentary wildlife photographer, I've
            come to realize that it's not the business side, nor the artistic
            side of this weird, awesome job that I love the most. It's the
            opportunity to meet different, incredible people from all over the
            world and connect over photographs. I'm endlessly grateful and
            cannot wait to embark on this journey with you.
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
          src="images/Wildlife/pexels-richard-verbeek-572861.jpg"
        />
      </div>
    </div>
  );
}
