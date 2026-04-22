import React from "react";
import Container from "../components/Container";
import ProjectContents from "../components/ProjectContents";

const Project = ({ id }) => {
  return (
    <section id={id} className=" pt-10 pb-15 ">
      <Container>
        <h2 className=" w-fit text-white font-anton text-[56px] uppercase relative">
          Proects
          <p className=" text-[60px] font-patung text-redd absolute -right-4 -bottom-6 capitalize tracking-tighter italic ">
            Works
          </p>
        </h2>
        <ProjectContents />
      </Container>
    </section>
  );
};

export default Project;
