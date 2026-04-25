import { easeInOut, motion } from "framer-motion";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center font-sans selection:bg-red-600 selection:text-white border-t-2 border-white/10 pt-10 pb-25 select-none ">
      <Container className=" text-white flex flex-col justify-between relative ">
        <header className="flex flex-col md:flex-row justify-between items-start gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              stiffness: 70,
              type: "spring",
            }}
            viewport={{ amount: 0.3, once: true }}
            className="max-w-md"
          >
            <p className="text-gray-300 text-lg font-satoshi leading-snug tracking-tight 2xl:text-left xl:text-left lg:text-balance md:text-left sm:text-left text-center ">
              Where every frame is shaped with intention, turning simple clips
              into meaningful stories that inspire, engage, and bring ideas to
              life with cinematic impact.
            </p>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            stiffness: 70,
            type: "spring",
          }}
          viewport={{ amount: 0.3, once: true }}
          className="mt-auto 2xl:pt-24 xl:pt-24 lg:pt-18 md:pt-14 pt-10 pb-4 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 z-10"
        >
          <p className="text-white text-sm tracking-wide">
            Designed & Developed
            <a
              href="#"
              target="_blank"
              className=" underline font-bold ml-1  hover:text-redd duration-400 ease-in-out "
            >
              LazyStudio
            </a>
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/t.rahman_108?igsh=ZXRjZTUyeGs3Yjlq"
              target="_blank"
            >
              <img
                src="icons/instagram.png"
                alt=""
                className=" invert-100 w-8 h-8 "
              />
            </a>
            <a
              href="https://www.facebook.com/share/1EDZygwPSd/?mibextid=wwXIfr"
              target="_blank"
            >
              <img
                src="icons/facebook.png"
                alt=""
                className=" invert-100 w-8 h-8 "
              />
            </a>
          </div>
        </motion.div>

        <div className="relative mt-8 select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-[60px] sm:text-[150px] md:text-[120px] lg:text-[165px] xl:text-[215px] 2xl:text-[285px] font-anton leading-[0.85] tracking-tight text-center flex justify-center whitespace-nowrap uppercase "
          >
            Tanvir Rahman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ amount: 0.3, once: true }}
            className="absolute -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-18 xl:-bottom-22 2xl:-bottom-25 right-0 sm:right-10 md:right-20 lg:right-40 xl:right-60 2xl:right-75 pointer-events-none text-[28px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[120px] 2xl:text-[140px] text-redd font-patung italic "
          >
            Video Editor
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ amount: 0.2, once: true }}
            className="absolute -top-4 -right-4 pointer-events-none text-[15px] text-white font-anton "
          >
            TM
          </motion.p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
