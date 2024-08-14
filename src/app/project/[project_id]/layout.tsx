import { notFound } from "next/navigation"
import { auth } from "@/auth"
import { NewProject } from "@/app/ui/buttons";
import { projects, user } from "@/app/lib/fake-data";

import SideBoard from './components/side-board'
import ProjectTabs from '@/app/ui/in-page-tabs';

export default async function ProjectsLayout({ children, params }: Readonly<{ children: React.ReactNode, params: { user: string } }>) {

    // const user = await fetchUser(session.user.github_account_id);
    // const projects = await fetchUsersProjects(user[0].id);
    const tabs = [
        {
            title: "Projekti",
            href: `/project/${params.user}/code`,
        },
        {
            title: "Ideoita",
            href: `/project/${params.user}/ideas`,
        },
        {
            title: "Tehtävät",
            href: `/project/${params.user}/tasks`,
        },
        {
            title: "Keskustelu",
            href: `/project/${params.user}/chat`,
        },
        {
            title: "Pull Requestit",
            href: `/project/${params.user}/pull-requests`,
        },
        {
            title: "Suunnitelma",
            href: `/project/${params.user}/roadmap`,
        },
        {
            title: "Tilastot",
            href: `/project/${params.user}/stats`,
        },
    ];

    return (
        <main className='flex gap-10 py-20'>
            <div className="flex flex-col gap-10 grow">
                <ProjectTabs tabs={tabs} />
                {children}
            </div>
            <SideBoard />
        </main>
    )
}
