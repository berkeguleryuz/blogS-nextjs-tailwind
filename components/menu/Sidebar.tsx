"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DarkMode } from "@/components/DarkMode";
import { navLinks, socialMedia } from "@/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import NavLinks, { SocialLinks } from "./NavLinks";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <aside className="hidden lg:flex h-screen w-72 bg-slate-400 dark:bg-neutral-900 border-r-2 dark:border-r-neutral-800/80 fixed">
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <div className="mx-auto justify-center items-center mt-12">
          <Link href={"/"}>
            {theme === "dark" ? (
              <Image src={"/logow.png"} alt="logo" width={120} height={100} />
            ) : (
              <Image src={"/logo.png"} alt="logo" width={120} height={100} />
            )}
          </Link>
          <div className="mt-3 text-center border-t-2 decoration-border border-lime-500">
            <DarkMode />
          </div>
        </div>

        <nav className="w-[90%] h-full flex-col justify-between md:flex gap-3">
          <ul className="hidden md:flex w-full flex-col items-start gap-4 mt-14">
            {navLinks.map((link) => {
              const isActive = pathname === link.route;
              const IconComponent = link.icon;

              return (
                <NavLinks
                  key={link.route}
                  isActive={isActive}
                  label={link.label}
                  route={link.route}
                  icon={link.icon}
                />
              );
            })}
          </ul>

          <ul className="hidden md:flex w-full flex-wrap items-center justify-center gap-2">
            <div className="w-full relative">
              <Input className="w-full rounded-full" />
              <Button variant={"link"} className="absolute right-0 top-0">
                <Search width={15} height={15} />
              </Button>
            </div>
            {socialMedia.map((link) => {
              const IconComponent = link.icon;

              return (
                <SocialLinks
                  key={link.route}
                  route={link.route}
                  icon={link.icon}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
