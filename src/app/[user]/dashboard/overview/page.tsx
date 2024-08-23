

import GitHubNotLinked from "@/app/ui/github-not-linked";
import GithubInfo from "./components/github-info";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { readUserById } from "@/app/lib/db_actions";

export default async function Overview() {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
        return notFound();
    }

    const userId = session.user.id;
    const user = await readUserById(userId.toString());

    if (!user) {
        return notFound();
    }

    // TODO: check github access token validity


    return (
        <main>
            <GitHubNotLinked />
        </main>
    );
}