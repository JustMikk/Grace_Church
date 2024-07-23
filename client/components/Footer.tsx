import Logo from "./navbar/Logo";
import Menu from "./navbar/Menu";

import React from "react";

const Footer = () => {
  return (
    <footer className=" text-slate-300 py-12 md:py-18 xl:px-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="flex items-center gap-6">
          <Menu />
        </nav>
        <div className="text-sm text-slate-300">
          &copy; 2024 Grace Church. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
