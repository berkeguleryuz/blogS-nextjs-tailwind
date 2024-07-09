import { Projects } from "@/constants";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface ProjectPageProps {
  params: {
    slug: string;
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
  return <div>ProjectPage</div>;
};

export default ProjectPage;
