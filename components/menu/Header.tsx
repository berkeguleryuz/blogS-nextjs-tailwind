import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="bg-slate-400 dark:bg-neutral-900 border-b-2 dark:border-b-lime-800/80 h-16 mx-auto flex justify-end pr-2 items-center">
      <div className="justify-end items-center">
        <Button variant={"berke"}>Login</Button>
      </div>
    </div>
  );
};

export default Header;