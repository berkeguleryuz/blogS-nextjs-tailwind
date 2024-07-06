"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CategoryItemProps {
  href: string;
  label: string;
}

const CategoryItem = ({ href, label }: CategoryItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Button
      asChild
      variant={isActive ? "default" : "outline"}
      className="">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default CategoryItem;
