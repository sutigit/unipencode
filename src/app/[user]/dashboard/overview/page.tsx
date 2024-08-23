import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

import { readUserById, storeGithubTokens } from "@/app/lib/db_actions";
import { getGithubUser, refreshAccessToken, checkTokenExpired } from "@/app/lib/github_actions";

import GitHubNotLinked from "@/app/ui/github-not-linked";
import GithubUserInfo from "./components/github-user-info";


export default async function Overview() {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
        return notFound();
    }

    const userId = session.user.id;
    const user = await readUserById(userId.toString());

    if (!user) {
        console.error('User not found');
        redirect('/error');
    }

    let ghUser;

    // Refresh token has been expired.
    if (checkTokenExpired(user.gh_rt_et)) {

        // When ghUser stays null, the GitHubNotLinked component will be rendered 
        //and the user will be prompted to link their GitHub account again.
        ghUser = null;
    }

    // Access token has been expired.
    else if (checkTokenExpired(user.gh_et)) {

        // Refresh the access token
        const response = await refreshAccessToken(user.gh_rt);

        if (response) {
            try {
                // Store the new tokens to database
                const res = await storeGithubTokens(userId.toString(), response);
    
                if (res) {
                    ghUser = await getGithubUser(res?.gh_at);
                }
            } catch (error) {
                // Something went wrong with the refresh token.
                // When ghUser stays null, the GitHubNotLinked component will be rendered 
                //and the user will be prompted to link their GitHub account again.
                ghUser = null;
                console.error('Error storing tokens', error);
            }
        }
    }

    // Access token is still valid.
    else {
        ghUser = await getGithubUser(user.gh_at);
    }
    

    return (
        <main>
            {
                ghUser ?
                    <GithubUserInfo user={ghUser} userId={userId.toString()}/>
                    :
                    <GitHubNotLinked />
            }
        </main>
    );
}