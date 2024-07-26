import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import SideBar from "./components/SideBar";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grace Church Admin",
  description: "A community of believers",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-400 " suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          manrope.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        <SideBar />
        <div className="p-8 w-full">
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
