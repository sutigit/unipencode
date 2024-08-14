import { categories, projects } from "@/app/lib/fake-data";

import ProjectCard from "@/app/ui/project-card";

import HeaderDivider from "@/app/ui/header-divider";

import CategoryCarousel from "../components/category-carousel";

export default async function AllPage() {

  return (
    <main>
      <CategoryCarousel />

      <HeaderDivider title="Kaikki Projektit" />

      <div className="grid grid-cols-3 gap-10 pb-10">
        {projects.map((project: any) => (
          <ProjectCard
            key={project.id}
            project={project} />
        ))}
      </div>
    </main>
  )
}
