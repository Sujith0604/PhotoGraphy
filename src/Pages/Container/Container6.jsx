import { motion } from "framer-motion";

export default function Container6() {
  return (
    <div className=" flex flex-col gap-5 md:flex-row w-[100%]">
      <div className=" flex items-center justify-center md:justify-end md:w-[50%]">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            ease: "easeIn",
          }}
          className=" md:h-[800px]"
          src="images/craig-mckay-jmURdhtm7Ng-unsplash.jpg"
        />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className=" flex flex-col md:w-[50%] gap-10 md:gap-[40px] md:items-start  justify-center"
      >
        <p className=" font-Heading tracking-widest">
          WILD-LIFE PHOTOGRAPHER & VIDEOGRAPHER
        </p>
        <h1 className=" font-Paragraph text-[40px] md:text-[60px]">
          Hey there, I'm John Snow
        </h1>
      </motion.div>
    </div>
  );
}
