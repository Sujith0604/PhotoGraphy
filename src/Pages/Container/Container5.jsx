import { motion } from "framer-motion";

export default function Container5() {
  return (
    <div className=" flex flex-col gap-5 md:flex-row w-[100%]">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1 }}
        className=" flex flex-col md:w-[50%] gap-10 md:gap-[40px] md:items-end  justify-center"
      >
        <p className=" font-Heading tracking-wider">
          FINE ART WEDDING PHOTOGRAPHER & VIDEOGRAPHER
        </p>
        <h1 className=" font-Paragraph text-[40px] md:text-[60px] text-clip">
          Hey there,
          <br /> I'm Sara Khan
        </h1>
      </motion.div>
      <div className=" flex items-center justify-center md:justify-start md:w-[50%]">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.5 }}
          transition={{
            ease: "easeIn",
          }}
          className=" md:h-[800px]"
          src="images/photo-1544005313-94ddf0286df2.avif"
        />
      </div>
    </div>
  );
}
