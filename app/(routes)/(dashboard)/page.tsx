import BrowseItem from "@/components/browse/BrowseItem";
import Category from "@/components/category/Category";
import { Separator } from "@/components/ui/separator";
import { Projects } from "@/constants";

export default function Home() {
  const filteredProjects = Projects.filter((project) => {
    return project;
  });

  filteredProjects.sort((a, b) => b.id - a.id);
  return (
    <main className="mt-4">
      <div>
        <Category />
      </div>

      <Separator className="mb-4 bg-lime-500" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
        {filteredProjects.map((project) => (
          <BrowseItem
            key={project.id}
            image={project.image}
            price={project.price}
            title={project.title}
            url={project.href}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
}
