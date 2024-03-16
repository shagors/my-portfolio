"use client";

import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import { useState } from "react";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* full navbar */}
            <Nav />
            <ThemeToggler />

            {/* mobile screen nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
