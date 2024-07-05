"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function DarkMode() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button variant="link" size="icon" onClick={() => setTheme("light")}>
        <SunIcon className="h-4 w-4" />
      </Button>
      |
      <Button variant="link" size="icon" onClick={() => setTheme("dark")}>
        <MoonIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
