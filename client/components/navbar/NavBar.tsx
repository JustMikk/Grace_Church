import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="fixed bg-slate-200 w-full z-20 shadow-sm">
      <div className="py-6 border-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Menu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
