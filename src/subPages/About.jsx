import React from "react";
import List from "../components/List";
import ListItems from "../components/ListItems";
import Container from "../components/Container";

const About = ({ id }) => {
  return (
    <section id={id} className=" select-none 2xl:pt-10 xl:pt-10 lg:pt-5 md:pt-0 sm:pt-0 pt-0 2xl:pb-15 xl:pb-15 lg:pb-15 md:pb-10 pb-0 ">
      <Container>
        <div className=" relative">
          <h2 className=" font-anton text-white text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] w-full lg:w-[70%] leading-tight ">
            Transforming raw footage into powerful visual narratives through
            creative vision, refined editing, and cinematic precision that not
            only captures attention but leaves a lasting and meaningful impact,
            helping brands and creators stand out in a crowded digital world
            while delivering stories that resonate, inspire, and truly connect
            with their audience.
          </h2>
          <p className=" text-[70px] sm:text-[90px] md:text-[130px] lg:text-[180px] text-redd font-patung absolute left-2 -bottom-12 sm:-bottom-14 md:-bottom-20 lg:-bottom-30 italic ">
            about me
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row justify-between items-start 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-16 mt-10 2xl:gap-12 lg:gap-16 md:gap-5 sm:gap-10 gap-4 ">
          <div className=" select-text selection:bg-white selection:text-black ">
            <div>
              <b className=" font-patung font-bold text-[32px] text-white tracking-wide w-fit ">
                Contacts
              </b>
              <p className=" text-[16px] text-white font-satoshi mt-5 select-text!  ">
                +880 1735 035182
              </p>
              <p className=" text-[16px] text-white font-satoshi mt-1 select-text!  ">
                tanvirrahman2111@gmail.com
              </p>
            </div>

            <div className=" 2xl:mt-15 xl:mt-15 lg:mt-15 mt-10 ">
              <b className=" font-patung font-bold text-[32px] text-white tracking-wide w-fit  ">
                Tools
              </b>
              <ul className=" mt-5 flex justify-start items-center gap-2 select-none ">
                <li>
                  <img src="icons/premiere-pro.png" className=" w-15 " />
                </li>
                <li>
                  <img src="icons/after-effects.png" className=" w-15 " />
                </li>
                <li>
                  <img src="icons/office.png" className=" w-15 " />
                </li>
              </ul>
            </div>

            <div className=" 2xl:mt-15 xl:mt-15 lg:mt-15 mt-10 flex flex-col gap-1 mb-5 ">
              <b className=" font-patung font-bold text-[32px] text-white tracking-wide w-fit  ">
                CV
              </b>
              <a
                href="images/logo.png"
                download="Tanvir Rahman (Visual Storyteller)"
                className="bg-white w-fit px-4 py-1 rounded-md text-[16px] text-black text-center font- font-bold mt-5 select-none  "
                target="_blank"
              >
                Download
              </a>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12.5 ">
            <div>
              <p className=" font-satoshi w-full md:w-88.75 text-[16px] text-white ">
                We are Drago — a creative agency dedicated to turning ideas into
                reality. Our team strategists, designers, and developers work
                together.
              </p>
              <img
                src="images/profile.jpeg"
                alt=""
                className=" w-full md:w-85 mt-10 rounded-[20px] "
              />
            </div>
            <List className=" flex flex-col justify-start items-start ">
              <ListItems className=" text-[16px] flex justify-center items-center gap-2 py-6 ">
                <img src="images/homeVec.png" /> Brand Strategy and Identity
              </ListItems>
              <ListItems className=" text-[16px] flex justify-center items-center gap-2 py-6 ">
                <img src="images/aboutVec.png" /> UI/UX and Web Design
              </ListItems>
              <ListItems className=" text-[16px] flex justify-center items-center gap-2 py-6 ">
                <img src="images/projectVec.png" /> Web and App Development
              </ListItems>
              <ListItems className=" text-[16px] flex justify-center items-center gap-2 py-6 ">
                <img src="images/blogVec.png" /> eCommerce Solutions
              </ListItems>
              <ListItems className=" text-[16px] flex justify-center items-center gap-2 py-6 ">
                <img src="images/homeVec.png" className=" rotate-180 " />{" "}
                Digital Marketing and SEO
              </ListItems>
            </List>
          </div>
        </div>

        <div className=" mt-20 ">
          <h2 className=" text-white font-anton text-[56px] uppercase ">
            SKills
          </h2>

          <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <div>
              <h3 className=" font-satoshi text-redd text-[20px] font-bold mb-4 ">
                Video Editing Skills
              </h3>
              <ul className=" text-white font-satoshi space-y-2">
                <li>Cinematic Video Editing</li>
                <li>Storytelling &amp; Narrative Building</li>
                <li>Color Grading &amp; Color Correction</li>
                <li>Motion Graphics &amp; Animation</li>
                <li>Sound Design &amp; Audio Sync</li>
                <li>Short-form Content Editing (Reels, TikTok, Shorts)</li>
                <li>YouTube Video Editing</li>
              </ul>
            </div>

            <div>
              <h3 className=" font-satoshi text-redd text-[20px] font-bold mb-4 ">
                Tools
              </h3>
              <ul className=" text-white font-satoshi space-y-2">
                <li>Adobe Premiere Pro — Advanced Editing, Timeline Mastery</li>
                <li>Adobe After Effects — Intro to Motion &amp; Effects</li>
                <li>Adobe Media Encoder</li>
                <li>Microsoft Office — Content Planning &amp; Documentation</li>
              </ul>
            </div>

            <div>
              <h3 className=" font-satoshi text-redd text-[20px] font-bold mb-4 ">
                Supporting Skills
              </h3>
              <ul className=" text-white font-satoshi space-y-2">
                <li>Creative Direction</li>
                <li>Visual Storytelling</li>
                <li>Content Strategy</li>
                <li>Branding Awareness</li>
                <li>Attention to Detail</li>
                <li>Time Management</li>
                <li>Client Communication</li>
              </ul>
            </div>

            <div>
              <h3 className=" font-satoshi text-redd text-[20px] font-bold mb-4 ">
                Platform-Specific
              </h3>
              <ul className=" text-white font-satoshi space-y-2">
                <li>YouTube Content Optimization</li>
                <li>Instagram Reels Editing</li>
                <li>TikTok Video Editing</li>
                <li>Social Media Content Creation</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
