import React, { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
