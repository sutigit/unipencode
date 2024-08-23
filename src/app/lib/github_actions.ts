import { Octokit } from 'octokit';
import { AccessTokenResponse } from './definitions';
import { z } from 'zod';

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const accessTokenUrl = process.env.GITHUB_ACCESS_TOKEN_URL;

export async function getGithubUser(access_token: string | null): Promise<object | null> {

    if (!access_token) {
        console.error('Missing required parameters');
        return null;
    }

    const octokit = new Octokit({
        auth: access_token,
    })

    try {
        const response = await octokit.request('GET /user', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        return response.data
    }
    catch (error) {
        console.error('Error fetching user data');
        return null;
    }
};



export async function generateAccessToken(code: string | null, state: string | null): Promise<AccessTokenResponse | null> {

    // Check the state parameter that it responds with the same value that was sent
    // TODO: Generate a secure random state
    if (state !== 'uniopencode') {
        console.error('State parameter does not match');
        return null;
    };

    if (!clientId || !clientSecret || !accessTokenUrl || !code) {
        console.error('Missing required parameters');
        return null;
    }

    const createAccessTokenUrl = () => {
        // Construct the authorization URL
        const redirectUrl = new URL(accessTokenUrl);
        redirectUrl.searchParams.append('client_id', clientId);
        redirectUrl.searchParams.append('client_secret', clientSecret);
        redirectUrl.searchParams.append('code', code);

        return redirectUrl.toString();
    }

    const url = createAccessTokenUrl();

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.status !== 200) {
        console.error('Error fetching access token');
        return null;
    }

    return response.json();
};




export async function refreshAccessToken(refresh_token: string | null): Promise<AccessTokenResponse | null> {

    if (!clientId || !clientSecret || !accessTokenUrl || !refresh_token) {
        console.error('Missing required parameters');
        return null;
    }

    const createRefreshTokenUrl = () => {
        // Construct the authorization URL
        const redirectUrl = new URL(accessTokenUrl);
        redirectUrl.searchParams.append('client_id', clientId);
        redirectUrl.searchParams.append('client_secret', clientSecret);
        redirectUrl.searchParams.append('grant_type', 'refresh_token');
        redirectUrl.searchParams.append('refresh_token', refresh_token);

        return redirectUrl.toString();
    }

    const url = createRefreshTokenUrl();

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.status !== 200) {
        console.error('Error refreshing access token');
        return null;
    }

    return response.json();
};


export function checkTokenExpired(datetime: string | null): boolean | null {

    if (!datetime) {
        return null;
    }

    const validatedDatetime = z.string().datetime().safeParse(datetime);

    if (validatedDatetime.success) {
        return new Date(datetime) < new Date(Date.now());
    }

    return null;
}
