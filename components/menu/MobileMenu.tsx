"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DarkMode } from "../DarkMode";
import NavLinks, { SocialLinks } from "./NavLinks";
import { navLinks, socialMedia } from "@/constants";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <header className="flex lg:hidden p-3 justify-between items-center fixed w-full border-b bg-slate-400 dark:bg-neutral-950 dark:border-r-slate-700/80">
      <Link href={"/"} className="flex items-center justify-center gap-3">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={70}
          height={70}
          className="rounded-full"
        />
      </Link>

      <Sheet>
        <SheetTrigger>
          <MenuIcon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="flex flex-col h-screen w-80 bg-slate-400 dark:bg-neutral-950  dark:border-r-slate-700/80">
          <div className="text-center mt-16 mb-16">
            <DarkMode />
          </div>
          <nav className="w-full h-full flex flex-col justify-between gap-3">
            <ul className="w-full flex-col items-start gap-4 mt-4">
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

            <ul className="flex     w-full flex-wrap items-center justify-center gap-2">
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
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileMenu;