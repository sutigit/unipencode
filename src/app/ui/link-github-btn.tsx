'use client';

import { Button, Link } from "@nextui-org/react";
import { usePathname } from 'next/navigation'

export default function LinkGithubBtn({ clientId, authRedirectUrl, authUrl }: { clientId: string, authRedirectUrl: string, authUrl: string }) { 

    const currentPath = usePathname();

    const redirectToGitHubAuthorization = () => {
        const state = "uniopencode"; // TODO: Generate a secure random state

        // Construct the redirect url for post authorization
        const augmentedAuthRedirectUrl = new URL(authRedirectUrl);
        augmentedAuthRedirectUrl.searchParams.append('next', currentPath);

        // Construct the authorization URL
        const redirectUrl = new URL(authUrl);
        redirectUrl.searchParams.append('client_id', clientId);
        redirectUrl.searchParams.append('redirect_uri', augmentedAuthRedirectUrl.toString());
        redirectUrl.searchParams.append('state', state);

        return redirectUrl.toString();
    }

    const redirect = () => {
        try {
            return redirectToGitHubAuthorization();
        } catch (error) {
            console.error('Error redirecting to GitHub authorization', error);
            return '/error';
        }
    }

    return (
        <div>
            <Button as={Link} href={redirect()} className="bg-pink text-black font-medium self-start">
                Link Github Account
            </Button>
        </div>
    );
}