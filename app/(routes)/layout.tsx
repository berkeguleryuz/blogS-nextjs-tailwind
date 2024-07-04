import MobileMenu from "@/components/menu/MobileMenu";
import Sidebar from "@/components/menu/Sidebar";
import React from "react";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <MobileMenu />
      <div className="flex-1 overflow-auto lg:max-h-screen py-8">
        <div className="mx-auto px-5 w-full">{children}</div>
      </div>
    </main>
  );
};

export default RouteLayout;