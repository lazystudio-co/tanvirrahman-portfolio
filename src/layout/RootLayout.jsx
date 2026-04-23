import React, { useLayoutEffect, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function RootLayout() {
  useLayoutEffect(() => {
    // Prevent browser's automatic scroll restoration
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    const isMobile = window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smoothWrapper",
        content: "#smoothContent",
        smooth: isMobile ? 0 : 1.5,
        effects: false,
        normalizeScroll: !isMobile,
        wholePixels: true,
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="smoothWrapper">
      <div id="smoothContent">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
