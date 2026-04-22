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
    <section className=" pb-10 " id={id}>
      <Container>
        <div className=" my-15 select-none ">
          <h1 className=" text-[280px] font-anton leading-[0.85] tracking-tight text-white uppercase relative">
            Tanvir Rahman
            <p className=" text-[140px] text-redd font-patung absolute right-63 -bottom-14 italic capitalize ">
              Visual Storyteller
            </p>
          </h1>

          <div className=" mt-12.5 flex justify-between items-start ">
            <p className=" text-white font-satoshi text-[16px] w-102 ">
              From concept to final cut, I craft visually compelling videos that
              tell powerful stories and bring your ideas to life with precision
              and creativity.
            </p>
            <a
              href="/project"
              onClick={handleViewWork}
              className=" text-white font-patung text-[26px] flex justify-center items-end gap-1 underline z-20 
              hover:text-redd duration-300 ease-in-out "
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
