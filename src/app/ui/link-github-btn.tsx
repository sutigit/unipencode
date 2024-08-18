import { Button, Link } from "@nextui-org/react";

export default function LinkGithubBtn() {

    // Function to construct the GitHub authorization URL and redirect the user
    const redirectToGitHubAuthorization = () => {
        // Configuration
        const clientId = process.env.CLIENT_ID;
        const redirectUri = process.env.GITHUB_CALLBACK_URL;
        const state = "laalaa"; // TODO: Generate a secure random state

        if (!clientId || !redirectUri || !state) {
            throw new Error('Missing required configuration');
        }

        // Construct the authorization URL
        const authorizationUrl = new URL('https://github.com/login/oauth/authorize');
        authorizationUrl.searchParams.append('client_id', clientId);
        authorizationUrl.searchParams.append('redirect_uri', redirectUri);
        authorizationUrl.searchParams.append('state', state);

        return authorizationUrl.toString();
    }

    const redirect = () => {
        try {
            return redirectToGitHubAuthorization();
        } catch (error) {
            console.error('Error redirecting to GitHub authorization', error);
            // TODO: REDIRECT TO ERROR PAGE
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