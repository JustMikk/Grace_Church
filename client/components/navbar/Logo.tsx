import React from "react";
import { LucideChurch } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 cursor-pointer">
        <div>
          <LucideChurch size={38} />
        </div>
        <div className="font-extrabold text-3xl">Grace Church</div>
      </div>
    </Link>
  );
};

export default Logo;
