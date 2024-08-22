import { Button, Link } from "@nextui-org/react";

// Function to construct the GitHub authorization URL and redirect the user
const redirectToGitHubAuthorization = () => {
    // Configuration
    const clientId = process.env.CLIENT_ID;
    const redirectUri = process.env.GITHUB_CALLBACK_URL;
    const authUrl = process.env.GITHUB_AUTHORIZATION_URL;
    const state = "laalaa"; // TODO: Generate a secure random state

    if (!clientId || !redirectUri || !state || !authUrl) {
        throw new Error('Missing required configuration');
    }

    // Construct the authorization URL
    const redirectUrl = new URL(authUrl);
    redirectUrl.searchParams.append('client_id', clientId);
    redirectUrl.searchParams.append('redirect_uri', redirectUri);
    redirectUrl.searchParams.append('state', state);

    return redirectUrl.toString();
}

export default function LinkGithubBtn() {

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