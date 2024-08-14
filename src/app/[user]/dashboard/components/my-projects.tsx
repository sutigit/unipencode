import { projects, user } from "@/app/lib/fake-data";
import ProjectCard from "@/app/ui/project-card";
import HeaderDivider from "@/app/ui/header-divider";
import SearchFilterSort from "@/app/ui/search-filter-sort";

export default function MyProjects() {
    return (
        <section>
            <SearchFilterSort />

            <div className="grid grid-cols-2 gap-10 pb-10">
                {projects.map((project: any) => (
                    <ProjectCard
                        key={project.id}
                        project={project} />
                ))}
            </div>
        </section>
    );
}