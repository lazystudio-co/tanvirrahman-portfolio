import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import RootLayout from "./layout/RootLayout";
import Auth from "./pages/Auth";
import { useLayoutEffect, useEffect } from "react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ScrollToHash from "./components/ScrollToHash";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    // 1. Prevent browser's automatic scroll restoration to stop jumping on refresh
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Use gsap.context for clean initialization/cleanup in React
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smoothWrapper",
        content: "#smoothContent",
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
        wholePixels: true,
      });

      // Ensure layout is calculated correctly
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  // Re-calculate page height whenever the content might change (on route changes)
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div id="smoothWrapper">
        <div id="smoothContent">
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/project" element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/blog" element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/about" element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
