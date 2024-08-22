
import { cookies } from 'next/headers';
import { CookieTypes } from "@/app/lib/enums";

import GitHubNotLinked from "@/app/ui/github-not-linked";
import GithubInfo from "./components/github-info";

export default async function Overview() {

    const githubLinked = cookies().get(CookieTypes.ACCESS_TOKEN);

    return (
        <main>
            {githubLinked ?
                <GithubInfo access_token={githubLinked.value}/>
                :
                <GitHubNotLinked />
            }
        </main>
    );
}