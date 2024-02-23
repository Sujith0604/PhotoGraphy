import { motion } from "framer-motion";

export default function Container7() {
  return (
    <div className=" flex flex-col md:flex-row w-[100%] gap-5">
      <div className=" flex items-center justify-center md:w-[50%]">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            ease: "easeIn",
          }}
          src="images/IMG_8794.webp"
        />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className=" flex flex-col text-center md:text-left gap-10 items-center md:items-start justify-center  md:w-[50%]"
      >
        <p className=" font-Paragraph ">
          Unconventional and daring wedding, elopement, and portrait
          photographers and videographers. My residence is in the bright town of
          Tamil Nadu, India. I can be found scheming away in a coffee shop,
          getting lost in the wilds of Tamil Nadu, or cuddling up with my furry
          pets at home—most likely with a camera nearby.
        </p>
        <h1 className=" font-Heading tracking-widest">
          ROMANTIC PHOTOGRAPHY WITH A DOCUMENTARY APPROACH
        </h1>
      </motion.div>
    </div>
  );
}
