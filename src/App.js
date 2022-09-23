import React from "react";

// import Components
import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/Calculate";
import Trade from "./components/Trade";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

// import Hook
import { useEffect, useState } from "react";

// import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  const toggler = () => {
    setNavMobile((state) => !state);
  };

  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 400,
    });
  });

  return (
    <>
      <Header toggler={toggler} />
      <Hero />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile toggler={toggler} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
