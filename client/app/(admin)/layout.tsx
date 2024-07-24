import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navbar/NavBar";
import { Contact } from "lucide-react";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";

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
      <body className={manrope.className}>Admin{children}</body>
    </html>
  );
}
