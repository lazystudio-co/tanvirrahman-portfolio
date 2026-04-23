import React, { useState } from "react";
import Container from "./Container";
import List from "./List";
import ListItems from "./ListItems";
import ContactBTN from "./ContactBTN";
import { useNavigate } from "react-router-dom";
import { ScrollSmoother } from "gsap/all";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const NavBar = () => {
  const linkPath = [
    { name: "About", path: "/about#about", bg: "/images/aboutVec.png" },
    { name: "Blog", path: "/blog#blog", bg: "/images/blogVec.png" },
    {
      name: "Projects",
      path: "/project#project",
      bg: "/images/projectVec.png",
    },
  ];

  const navigate = useNavigate();

  const handleLogoClick = async (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
      await new Promise((r) => setTimeout(r, 80));
    }

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const [toogleMenu, setToogleMenu] = useState(false);

  const handleToogleMenu = () => {
    setToogleMenu((prev) => !prev);
  };

  return (
    <nav id="#" className=" bg-black z-50 relative">
      <Container
        className=" flex justify-between items-center z-50 bg-black 
      2xl:py-6 xl:py-6 lg:py-6 py-4 "
      >
        <a
          href="/"
          onClick={handleLogoClick}
          className=" flex justify-center items-center gap-1 cursor-pointer "
        >
          <img
            src="images/logo.png"
            alt="logo"
            className=" 2xl:w-40 xl:w-40 lg:w-40 w-30 rounded-md select-none "
          />
        </a>

        <div className=" flex justify-center items-center 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-6 gap-4 ">
          <div className=" 2xl:block xl:block lg:block hidden ">
            <List>
              {linkPath.map((link) => (
                <ListItems
                  className="text-white"
                  key={link.path}
                  PagePath={link.path}
                  activeBg={link.bg}
                >
                  {link.name}
                </ListItems>
              ))}
            </List>
          </div>

          <ContactBTN>Contact</ContactBTN>

          <button
            onClick={handleToogleMenu}
            className=" 2xl:hidden xl:hidden lg:hidden block "
          >
            <Menu className=" text-white " size={30} />
          </button>
        </div>

        <AnimatePresence>
          {toogleMenu && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 70, damping: 14 }}
              className=" bg-black absolute left-0 md:top-18 top-16 w-full md:px-12 px-6 py-5 -z-20 "
            >
              <b className=" md:text-5xl text-3xl text-white font-patung ">
                Tanvir Rahman
              </b>
              <List className="flex justify-start items-start gap-6 mt-5 ">
                {linkPath.map((link) => (
                  <ListItems
                    className=" md:text-2xl! text-md! text-black! bg-white md:px-5 px-3 md:py-2 py-1 rounded-md "
                    key={link.path}
                    PagePath={link.path}
                    activeBg={link.bg}
                    onClose={() => setToogleMenu(false)}
                  >
                    {link.name}
                  </ListItems>
                ))}
              </List>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default NavBar;
