import React from "react";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import { ScrollSmoother } from "gsap/all";
import { easeOut, motion } from "framer-motion";

const Landing = ({ id }) => {
  const paragraph =
    "From concept to final cut, I craft visually compelling videos that tell powerful stories and bring your ideas to life with precision and creativity.";
  const navigate = useNavigate();

  const handleViewWork = (e) => {
    e.preventDefault();
    navigate("/project");
    setTimeout(() => {
      const smoother = ScrollSmoother.get();
      const el = document.getElementById("project");
      if (smoother && el) smoother.scrollTo(el, true, "top top");
    }, 100);
  };

  return (
    <section id={id}>
      <Container>
        <div className=" 2xl:my-15 xl:my-10 lg:my-12 md:my-10 my-6 select-none ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              stiffness: 70,
              type: "spring",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mt-10 text-[85px] sm:text-[140px] md:text-[125px] lg:text-[163px] xl:text-[215px] 2xl:text-[280px] font-anton tracking-tight text-white 
           text-center 2xl:leading-snug xl:leading-snug lg:leading-snug md:leading-30 sm:leading-snug leading-20 uppercase relative"
          >
            Tanvir Rahman
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className=" text-[42px] sm:text-[44px] md:text-[70px] lg:text-[90px] xl:text-[120px] 2xl:text-[140px] text-redd font-patung absolute right-0 -bottom-10 sm:-bottom-5 md:-bottom-14 lg:-bottom-8 xl:-bottom-8 xl:right-63 italic capitalize "
            >
              Visual Storyteller
            </motion.p>
          </motion.h1>

          <div className=" 2xl:mt-10 xl:mt-10 lg:mt-8 md:mt-14 sm:mt-14 mt-10 flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4 ">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 1.5, // Wait for the main headers to finish
                    staggerChildren: 0.03, // Typewriter speed
                  },
                },
              }}
              className="text-white font-satoshi text-[14px] md:text-[16px] w-full sm:w-72 md:w-102"
            >
              {paragraph.split(" ").map((word, wIndex) => (
                <span
                  key={wIndex}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word.split("").map((char, cIndex) => (
                    <motion.span
                      key={cIndex}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      transition={{ duration: 0.01 }}
                      style={{ display: "inline-block" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.p>
            <motion.a
              href="/project"
              onClick={handleViewWork}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 1.5, // Starts at the same time as the paragraph
                    staggerChildren: 0.04,
                  },
                },
              }}
              className=" text-white font-patung text-[20px] md:text-[26px] font-medium flex justify-center items-end underline z-20 hover:text-redd duration-300 ease-in-out shrink-0 "
            >
              {"View My Work".split(" ").map((word, wIndex) => (
                <span
                  key={wIndex}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word.split("").map((char, cIndex) => (
                    <motion.span
                      key={cIndex}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      transition={{ duration: 0.01 }}
                      style={{ display: "inline-block" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: easeOut }}
          viewport={{ once: true }}
          className=" mb-25 "
        >
          <img
            loading="eager"
            src="images/heroimage.jpg"
            className=" rounded-[20px] select-none "
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default Landing;
