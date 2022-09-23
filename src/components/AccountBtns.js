import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      {/* Login link */}
      <a className="hover:text-blue transition" href="#home">
        Login
      </a>
      {/* separator */}
      <span className="mx-6 text-white/20 font-thin">|</span>
      {/* register btn */}
      <button className="btn">Register</button>
    </div>
  );
};

export default AccountBtns;
