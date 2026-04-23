import React from "react";
import Container from "../components/Container";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaArrowTurnDown,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ScrollSmoother } from "gsap/all";
import List from "../components/List";
import ListItems from "../components/ListItems";

const Landing = ({ id }) => {
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
          <h1
            className=" mt-10 text-[85px] sm:text-[140px] md:text-[125px] lg:text-[163px] xl:text-[215px] 2xl:text-[280px] font-anton tracking-tight text-white 
           text-center 2xl:leading-snug xl:leading-snug lg:leading-snug md:leading-30 sm:leading-snug leading-20 uppercase relative"
          >
            Tanvir Rahman
            <p className=" text-[42px] sm:text-[44px] md:text-[70px] lg:text-[90px] xl:text-[120px] 2xl:text-[140px] text-redd font-patung absolute right-0 -bottom-10 sm:-bottom-5 md:-bottom-14 lg:-bottom-8 xl:-bottom-8 xl:right-63 italic capitalize ">
              Visual Storyteller
            </p>
          </h1>

          <div className=" 2xl:mt-10 xl:mt-10 lg:mt-8 md:mt-14 sm:mt-14 mt-10 flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4 ">
            <p className=" text-white font-satoshi text-[14px] md:text-[16px] w-full sm:w-72 md:w-102 ">
              From concept to final cut, I craft visually compelling videos that
              tell powerful stories and bring your ideas to life with precision
              and creativity.
            </p>
            <a
              href="/project"
              onClick={handleViewWork}
              className=" text-white font-patung text-[20px] md:text-[26px] flex justify-center items-end gap-1 underline z-20 hover:text-redd duration-300 ease-in-out shrink-0 "
            >
              View My Work
            </a>
          </div>
        </div>
        <img
          src="images/heroimage.jpg"
          className=" rounded-[20px] select-none mb-25 "
        />
      </Container>
    </section>
  );
};

export default Landing;
