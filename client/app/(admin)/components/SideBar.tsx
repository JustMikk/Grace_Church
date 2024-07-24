"use client";
import { FaUsers } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillDashboard } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Dashboard",
    icon: <AiFillDashboard size="28" className="text-center" />,
    href: "/admin",
  },
  {
    label: "Members",
    icon: <FaUsers size="28" className="text-center" />,
    href: "/admin/members",
  },
  {
    label: "Events",
    icon: <GiTrophyCup size={28} className="text-center" />,
    href: "/admin/events",
  },
  {
    label: "Announcements",
    icon: <HiSpeakerphone size={28} className="text-center" />,
    href: "/admin/announcements",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <aside className="h-[100vh] shadow-xl shadow-slate-300/50 py-3 bg-slate-900 w-24 md:w-60 fixed z-10">
        <div className="flex flex-col w-full mt-[10vh] md:mt-[9vh]">
          <ul className="w-full">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mx-3 flex items-center justify-start gap-4 py-4 rounded-lg px-4 ${
                    isActive ? "bg-gray-300 text-black" : "text-neutral-300"
                  }`}
                >
                  {link.icon}
                  <span className="hidden md:flex font-semibold text-lg text-center">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
