import React from "react";
import Container from "../components/Container";
import ProjectContents from "../components/ProjectContents";
import { easeIn, easeOut, motion } from "framer-motion";

const Project = ({ id }) => {
  return (
    <section
      id={id}
      className=" 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-8 pt-2 pb-15 "
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          viewport={{ once: true, amount: 0.3 }}
          className=" w-fit text-white font-anton text-[56px] uppercase relative"
        >
          Proects
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeIn }}
            viewport={{ once: true, amount: 0.2 }}
            className=" text-[60px] font-patung text-redd absolute -right-4 -bottom-6 capitalize tracking-tighter italic "
          >
            Works
          </motion.p>
        </motion.h2>
        <ProjectContents />
      </Container>
    </section>
  );
};

export default Project;
