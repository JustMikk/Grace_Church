import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import AdminNavbar from "./components/AdminNavBar";
import Sidebar from "./components/SideBar";

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
    <html lang="en">
      <body className={manrope.className}>
        <AdminNavbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
