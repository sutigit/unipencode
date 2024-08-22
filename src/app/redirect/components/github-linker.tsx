'use client';

import { useEffect } from "react";
import { createCookie } from "@/app/lib/actions";
import { CookieTypes } from "@/app/lib/enums";

import { useRouter } from 'next/navigation'

export default function GithubLinker({ data }: { data: any }) {
    const router = useRouter();

    useEffect(() => {
        const storeTokens = async () => {
            // access token
            await createCookie({
                name: CookieTypes.ACCESS_TOKEN,
                value: data.access_token,
                expires: new Date(Date.now() + data.expires_in * 1000)
            });

            // refresh token
            await createCookie({
                name: CookieTypes.REFRESH_TOKEN,
                value: data.refresh_token,
                expires: new Date(Date.now() + data.refresh_token_expires_in * 1000)
            });
        }

        if (data) {
            storeTokens().then(() => {
                router.push('/explore/all');
            });
        }
    }, []);

    return (
        <div></div>
    );
}