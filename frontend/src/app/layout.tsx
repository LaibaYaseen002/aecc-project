// layout.tsx
import React, { ReactNode } from "react";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper"; // The client wrapper from before
import { getNavbarItems } from "@/lib/navbar"; // Your API fetch function

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const menuItems = await getNavbarItems();

  return (
    <html lang="en">
      <body className="bg-white text-black">
        <NavbarWrapper menuItems={menuItems} />
        <main>{children}</main>
      </body>
    </html>
  );
}
