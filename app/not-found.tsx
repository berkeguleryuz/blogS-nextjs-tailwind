import { Button } from "@/components/ui/button";
import { Shield, ShieldEllipsisIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center bg-slate-400 dark:bg-neutral-900">
      <div className="w-1/3 h-screen hidden lg:block">
        <Image
          src={"/notfound.jpg"}
          alt="not found"
          width={1080}
          height={1920}
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="w-full h-screen lg:p-36 md:p-52 sm:p-20 p-8 lg:w-2/3 flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Not Found</h1>
        <ShieldEllipsisIcon className="h-96 w-96" />
        <Button asChild variant={"berke"}>
          <Link href={"/"}>Go back</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
