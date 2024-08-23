'use client';

import { useEffect } from "react";
import { storeGithubTokens } from "@/app/lib/db_actions";
import { useRouter, useSearchParams } from 'next/navigation'

export default function GithubLinker({ ghResponse, userId }: { ghResponse: any, userId: string | undefined }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if ( !userId || !ghResponse) return;

        storeGithubTokens(userId, ghResponse)
            .then(() => {
                // redirect back to page where the user started this process or to the home page
                router.replace(searchParams.get('next') || '/', { scroll: true });
            }).catch((error) => {
                console.error('Failed to store Github tokens:', error);
                router.replace('/error', { scroll: true });
            });

    }, []);

    return null;
}