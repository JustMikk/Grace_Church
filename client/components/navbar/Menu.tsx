"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

function Menu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}>
        <MenuIcon className="w-6 h-6" />
      </Button>
      <nav className="hidden md:flex items-center gap-12">
        <Link href="/" className="hover:underline text-xl" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="hover:underline text-xl" prefetch={false}>
          Donate
        </Link>
        <Link
          href="/events"
          className="hover:underline text-xl"
          prefetch={false}
        >
          Events
        </Link>
        <Link
          href="/announcements"
          className="hover:underline text-xl"
          prefetch={false}
        >
          Announcements
        </Link>
        <Link href="#" className="hover:underline text-xl" prefetch={false}>
          About
        </Link>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-md p-4">
            <Button variant="ghost" onClick={toggleSidebar} className="mb-4">
              Close
            </Button>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:underline text-xl"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <Link
                href="#"
                className="hover:underline text-xl"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Donate
              </Link>
              <Link
                href="/events"
                className="hover:underline text-xl"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Events
              </Link>
              <Link
                href="/announcements"
                className="hover:underline text-xl"
                prefetch={false}
                onClick={toggleSidebar}
              >
                Announcements
              </Link>
              <Link
                href="#"
                className="hover:underline text-xl"
                prefetch={false}
                onClick={toggleSidebar}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
