import { Octokit } from 'octokit'

export async function getAuthenticatedUser({ access_token }: { access_token: string }) {
    const octokit = new Octokit({
        auth: access_token,
    })

    const response = await octokit.request('GET /user', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    return response.data
}