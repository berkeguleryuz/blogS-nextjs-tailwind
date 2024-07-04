"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  isActive: boolean;
  label: string;
  route: string;
  icon: React.ElementType;
}

const NavLinks = ({ isActive, label, route, icon }: NavLinksProps) => {
  const IconComponent = icon;
  return (
    <Button
      asChild
      variant={"ghost"}
      key={route}
      className={cn(
        "w-full h-12 justify-center",
        isActive
          ? "bg-lime-300 hover:bg-lime-400 dark:bg-lime-400 dark:hover:bg-lime-300 border border-slate-950 dark:border-lime-100"
          : "hover:bg-slate-300 dark:hover:bg-slate-400",
      )}>
      <Link href={route}>
        <div
          className={cn(
            "flex items-center w-full gap-2 text-black dark:text-slate-100 text-lg",
            isActive && "text-slate-950 dark:text-slate-800",
          )}>
          <IconComponent className="w-6 h-6" />
          <p className="">{label}</p>
        </div>
      </Link>
    </Button>
  );
};

export default NavLinks;

interface SocialLinksProps {
  route: string;
  icon: React.ElementType;
}

export const SocialLinks = ({ route, icon }: SocialLinksProps) => {
  const IconComponent = icon;
  return (
    <div className="">
      <li className="flex flex-row justify-between items-center font-semibold w-full hover:bg-slate-300 dark:hover:bg-slate-600 rounded-full">
        <Link href={route} className="p-4 font-semibold flex gap-2">
          <IconComponent className="text-black dark:text-white text-xl" />
        </Link>
      </li>
    </div>
  );
};
