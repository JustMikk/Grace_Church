"use client";
import React, { useState } from "react";
import { Nav } from "./ui/Nav";
import {
  BellIcon,
  BookAIcon,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowSize, useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobilewidth = onlyWidth < 768;
  return (
    <div className="relative min-w-[80px] border-r pl-3 pr-9 lg:px-3 pb-10 pt-24">
      {!mobilewidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            className="rounded-full p-2"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            variant="secondary"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobilewidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/admin",
          },
          {
            title: "Members",
            icon: UserRound,
            variant: "ghost",
            href: "/admin/members",
          },
          {
            title: "Events",
            icon: Calendar,
            variant: "ghost",
            href: "/admin/events",
          },
          {
            title: "Announcements",
            icon: BellIcon,
            variant: "ghost",
            href: "/admin/announcements",
          },
        ]}
      />
    </div>
  );
}
