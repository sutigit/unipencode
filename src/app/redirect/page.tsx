import { Spinner } from "@nextui-org/spinner";
import Linker from "./components/github-linker";
import { redirect } from "next/navigation";

export default async function GithubRedirectPage({ params, searchParams }: { params: any, searchParams: any }) {

    const code = searchParams['code'];
    const state = searchParams['state'];
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const accessTokenUrl = process.env.GITHUB_ACCESS_TOKEN_URL;

    // Check the state parameter that it responds with the same value that was sent
    // TODO: Generate a secure random state
    if (state !== 'uniopencode') {
        console.error('State parameter does not match');
        redirect('/error');
    };

    if (!clientId || !clientSecret || !accessTokenUrl || !code) {
        console.error('Missing required parameters');
        redirect('/error');
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

    if (!response.ok) {
        console.error('Error fetching access token');
        redirect('/error');
    }

    const data = await response.json();

    return (
        <main className="h-screen w-full flex justify-center gap-8 items-center">
            <p className="text-3xl font-bold">Completing linking</p>
            <Spinner />
            <div className="invisible">
                <Linker data={data} />
            </div>
        </main>
    );
}