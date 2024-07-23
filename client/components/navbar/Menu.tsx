import React from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

function Menu() {
  return (
    <div>
      <Button variant="ghost" className="md:hidden">
        <MenuIcon className="w-6 h-6" />
      </Button>
      <nav className="hidden md:flex items-center gap-12">
        <Link href="#" className="hover:underline text-xl" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="hover:underline text-xl" prefetch={false}>
          Events
        </Link>
        <Link href="#" className="hover:underline text-xl" prefetch={false}>
          Donate
        </Link>
        <Link href="#" className="hover:underline text-xl" prefetch={false}>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
