import { notFound } from "next/navigation"
import { auth } from "@/auth"
import { NewProject } from "@/app/ui/buttons";
import { projects, user } from "@/app/lib/fake-data";
import MyProjects from "./components/my-projects";
import ProfileBoard from "./components/profile-board";
import HeaderDivider from "@/app/ui/header-divider";
import ProfileTabs from '@/app/ui/in-page-tabs';
import Header from "@/app/ui/header";

export default async function ProfileLayout({ children, params }: Readonly<{ children: React.ReactNode, params:{ user:string } }>) {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  if (session?.user?.username !== params.user) {
    return notFound();
  }

  // const user = await fetchUser(session.user.github_account_id);
  // const projects = await fetchUsersProjects(user[0].id);
  const tabs = [
    { 
      title: "Overview",
      href: `/${params.user}/dashboard/overview`,
    },
    { 
      title: "My Projects",
      href: `/${params.user}/dashboard/my-projects`,
    },
    { 
      title: "Portfolio",
      href: `/${params.user}/dashboard/portfolio`,
    },
  ];

  return (
    <main className="flex flex-col gap-10 py-20">
      <Header title="Dashboard" />
      <div className="flex flex-row gap-20">
        <ProfileBoard />
        <section className="flex flex-col gap-10">
            <ProfileTabs tabs={tabs} />
            {children}            
        </section>
      </div>
    </main>
  )
}
