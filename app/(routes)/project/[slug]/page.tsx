import { Categorys } from "@/components/category/Category";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Projects } from "@/constants";
import { Coins, TimerIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = Projects.find((project) =>
    project.href.includes(params.slug),
  );

  if (!project) {
    toast.error("Project not found");
    return redirect("/browse");
  }
  return {
    title: project.title,
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = Projects.find((project) =>
    project.href.includes(params.slug),
  );

  if (!project) {
    toast.error("Project not found");
    return redirect("/browse");
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    title: project.title,
    name: project.title,
    image: project.image,
    description: project.description,
    publishedAt: "2024-07-05",
    updatedAt: "2024-07-07",
    author: "Omegayon",
    isPublished: true,
    tags: project.title,
  };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
        <div className="lg:col-span-6">
          <div className="bg-stone-100 dark:bg-neutral-950 p-3 border-2  rounded-xl">
            <Image
              src={project.image}
              alt="about us banner"
              className="w-full h-[350px] rounded-xl  object-contain"
              width={500}
              height={500}
            />

            <h2 className="text-center text-2xl mt-4 font-semibold  py-4">
              {project.title}
            </h2>
            <div className="space-y-3">
              <p>{project.description}</p>

              <Separator />
              <div className="flex flex-row gap-12 items-center mt-12 justify-between">
                <div className="flex items-center justify-center gap-3">
                  <Coins /> {project.price}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <TimerIcon /> {project.publishedAt}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <UserIcon /> {project.author}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-stone-100 dark:bg-neutral-950 border-2 p-3  rounded-xl">
            <Image
              src="/clodron.jpg"
              alt="about us banner"
              className="w-full rounded-xl shadow-md "
              width={500}
              height={500}
            />
          </div>
          <div className="bg-stone-100 mt-2 dark:bg-neutral-950 border-2 p-3 rounded-xl">
            <p>
              Check my projects on{" "}
              <Link
                className="font-semibold text-blue-500 hover:underline"
                href={"https://github.com/berkeguleryuz"}>
                GitHub
              </Link>
            </p>
            <p className="font-semibold">
              You can send an email to{" "}
              <a
                className="font-semibold text-blue-500 hover:underline"
                href="mailto:berke@clodron.com">
                berke@clodron.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
