'use server';

import { updateUser, getUserById, getUserByUsername } from "./database/users";
import { UserSchema } from "./validations";
import { z } from "zod";

export async function readUserById(userId: string) {
    const validatedUserId = UserSchema.pick({ id: true }).safeParse({id: userId});

    if (!validatedUserId.success) {
        throw new Error('Invalid user id', validatedUserId.error);
    }

    const user = await getUserById(validatedUserId.data.id);

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};

export async function readUserByUsername(username: string) {
    const validatedUsername = UserSchema.pick({ username: true }).safeParse({username: username});

    if (!validatedUsername.success) {
        throw new Error('Invalid username', validatedUsername.error);
    }

    const user = await getUserByUsername(validatedUsername.data.username);

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};

export async function storeGithubTokens(userId: string, ghResponse: any) {

    const validatedUserId = UserSchema.pick({ id: true }).safeParse({id: userId});

    if (!validatedUserId.success) {
        throw new Error('Invalid user id', validatedUserId.error);
    }

    const validatedGhResponse = z.object({
        access_token: z.string().min(1),
        refresh_token: z.string().min(1),
        expires_in: z.number().min(1),
        refresh_token_expires_in: z.number().min(1),
    }).safeParse(ghResponse);

    if (!validatedGhResponse.success) {
        throw new Error('Invalid github response', validatedGhResponse.error);
    }

    const user = await getUserById(validatedUserId.data.id);

    if (!user) {
        throw new Error('User not found');
    }

    const response = await updateUser({
        ...user,
        gh_at: validatedGhResponse.data?.access_token,
        gh_rt: validatedGhResponse.data?.refresh_token,
        gh_et: new Date(Date.now() + validatedGhResponse.data?.expires_in * 1000).toISOString(),
        gh_rt_et: new Date(Date.now() + validatedGhResponse.data?.refresh_token_expires_in * 1000).toISOString(),
    });

    return response;
} 