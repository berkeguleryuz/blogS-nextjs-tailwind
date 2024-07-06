import Header from "@/components/menu/Header";
import MobileMenu from "@/components/menu/MobileMenu";
import Sidebar from "@/components/menu/Sidebar";
import React from "react";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <main className="flex min-h-screen ">
      <Sidebar />
      <MobileMenu />
      <div className="flex-1 lg:ml-72 ml-0 lg:max-h-screen">
        <Header />
        <div className="px-5 flex-col">{children}</div>
      </div>
    </main>
  );
};

export default RouteLayout;
