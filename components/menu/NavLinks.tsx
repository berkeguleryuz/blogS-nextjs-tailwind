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
          ? "bg-lime-300 hover:bg-lime-400 dark:bg-lime-400 dark:hover:bg-lime-300 border border-stone-950 dark:border-lime-100"
          : "hover:bg-stone-300 dark:hover:bg-stone-400",
      )}>
      <Link href={route}>
        <div
          className={cn(
            "flex items-center text-center w-full gap-3 text-black dark:text-stone-100 text-md",
            isActive && "text-stone-950 dark:text-stone-800",
          )}>
          <IconComponent className="w-4 h-4" /> 
          <p className="text-center flex items-center self-center justify-center">|</p>
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
      <li className="flex flex-row justify-between items-center font-semibold w-full hover:bg-stone-300 dark:hover:bg-stone-600 rounded-full">
        <Link href={route} target="_blank" className="p-4 font-semibold flex gap-2">
          <IconComponent className="text-black dark:text-white text-xl" />
        </Link>
      </li>
    </div>
  );
};
