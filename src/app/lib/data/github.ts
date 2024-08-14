import { Octokit } from "octokit";


// GITHUB API --------------------------------------------------------------


export async function fetchPublicRepositories(access_token: string | undefined) {

    const octokit = new Octokit({
        auth: access_token,
    })

    try {
        return await octokit.request('GET /user/repos', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            },
            sort: 'created',
            per_page: 5,
            page: 1
        })
    }
    catch (error) {
        console.error('GitHub API error:', error);
        throw new Error('Failed to fetch public repositories');
    }
}

export async function fetchGithubAccount(access_token: string | undefined) {

    const octokit = new Octokit({
        auth: access_token,
    })

    try {
        return await octokit.request('GET /user', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }
    catch (error) {
        console.error('GitHub API error:', error);
        throw new Error('Failed to fetch user data');
    }
}