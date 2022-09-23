import React from "react";

// import components
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import AccontsBtns from "./AccountBtns";

// import icon
import { CgMenuRight } from "react-icons/cg";

const Header = ({ toggler }) => {
  return (
    <>
      <header
        className="py-[30px] lg:pt-[40px]"
        data-aos="fade-down"
        data-aos-delay="900"
        data-aos-duration="2000 "
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home">
            <img src={Logo} alt="" />
          </a>
          {/* Nav & Btns */}
          <div className="hidden lg:flex gap-x-[55px]">
            <Nav />
            <AccontsBtns />
           </div>
          {/* open nav btn */}
          <div className="lg:hidden cursor-pointer">
            <CgMenuRight className="text-2xl" onClick={toggler} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
