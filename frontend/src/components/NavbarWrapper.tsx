"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";

type MenuItem = {
  title: string;
  href: string;
  children?: MenuItem[];
};

type Props = {
  menuItems: MenuItem[];
};

export default function NavbarWrapper({ menuItems }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Navbar
      menuItems={menuItems}
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
      openDropdown={openDropdown}
      setOpenDropdown={setOpenDropdown}
      showLoginModal={showLoginModal}
      setShowLoginModal={setShowLoginModal}
    />
  );
}
