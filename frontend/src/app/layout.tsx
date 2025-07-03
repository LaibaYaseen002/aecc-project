import React, { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
