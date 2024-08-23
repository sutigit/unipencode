'use server';

import { updateUser, getUserById } from "./database/users";

export async function storeGithubTokens(userId: string, ghResponse: any) {

    const user = await getUserById(userId);

    if (!user) {
        throw new Error('User not found');
    }

    const response = await updateUser({
        ...user,
        gh_at: ghResponse['access_token'],
        gh_rt: ghResponse['refresh_token'],
        gh_et: new Date(Date.now() + ghResponse['expires_in'] * 1000).toISOString(),
        gh_rt_et: new Date(Date.now() + ghResponse['refresh_token_expires_in'] * 1000).toISOString(),
    });

    return response;
} 