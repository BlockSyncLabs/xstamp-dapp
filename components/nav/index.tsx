"use client";

import React, { useEffect, useRef } from "react";
import HomeLogo from "../home-logo";
import Pages from "./pages";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Index = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNav = (close?: boolean) => {
    const { current: nav } = navRef;

    if (!nav) return;

    if (close) {
      nav.classList.remove("left-0");

      return;
    }

    nav.classList.toggle("!left-0");
  };

  useEffect(() => {
    toggleNav(true);
  }, [pathname]);

  return (
    <div className="relative py-4">
      <div className="flex items-center justify-center mx-auto layout">
        <HomeLogo className="w-20 h-20 text-center border-2 border-primary-foreground rounded-[50%] flex items-center justify-center mr-auto md:mr-0" />
        <nav
          ref={navRef}
          className="w-full absolute top-[6.9rem] -left-full bg-tertiary transition-all duration-300 z-10 md:static md:bg-transparent md:mx-auto md:max-w-sm"
        >
          <Pages />
        </nav>
        <div className="mr-0">
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
        <Button
          onClick={() => toggleNav()}
          className="ml-4 md:hidden"
          size="icon"
          variant="ghost"
        >
          <Menu />
        </Button>
      </div>
    </div>
  );
};

export default Index;
