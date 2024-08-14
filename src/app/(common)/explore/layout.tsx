import Tabs from '@/app/ui/in-page-tabs';

export default async function ExploreLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const tabs = [
        { title: "Esittelyssä", href: "/explore/featured" },
        { title: "Kaikki", href: "/explore/all" },
        { title: "Minulle", href: "/explore/recommended" },
    ];

    return (
        <main className="flex flex-col py-10">
            {/* <Tabs tabs={tabs} centered={true} /> */}
            { children }
        </main>
    )
}
