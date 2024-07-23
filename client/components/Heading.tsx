"use client";
import React from "react";
interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-3xl   xl:text-4xl font-bold text-white">{title}</div>
      <div className="font-light text-white my-6">{subtitle}</div>
    </div>
  );
};

export default Heading;
