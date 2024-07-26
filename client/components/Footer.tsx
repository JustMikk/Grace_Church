import { BsTwitterX, BsYoutube } from "react-icons/bs";
import Logo from "./navbar/Logo";
import Menu from "./navbar/Menu";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-slate-300 py-12 md:py-18">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex flex-col items-center md:items-start gap-6">
          <Logo />
          <nav className="flex flex-col md:flex-row items-center gap-6 text-xl ">
            <Link className="hover:underline" href="/">
              Home
            </Link>
            <Link className="hover:underline" href="/events">
              Events
            </Link>
            <Link className="hover:underline" href="/announcements">
              Announcements
            </Link>
            <Link className="hover:underline" href="/about">
              About
            </Link>
          </nav>
        </div>
        <div className="flex gap-6">
          <BsYoutube
            size={28}
            className="text-slate-200 hover:text-slate-500 cursor-pointer"
          />
          <FaFacebook
            size={28}
            className="text-slate-200 hover:text-slate-500 cursor-pointer"
          />
          <BsTwitterX
            size={28}
            className="text-slate-200 hover:text-slate-500 cursor-pointer"
          />
        </div>
        <div className="text-sm text-center md:text-left text-slate-300">
          &copy; 2024 Grace Church. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
