import { Spinner } from "@nextui-org/spinner";
import Linker from "./components/github-linker";

export default async function GithubRedirectPage({ params, searchParams }: { params: any, searchParams: any }) {

    const code = searchParams['code'];
    const state = searchParams['state'];
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const accessTokenUrl = process.env.GITHUB_ACCESS_TOKEN_URL;

    if (!clientId || !clientSecret || !accessTokenUrl || !code) {
        throw new Error('Missing required configuration');
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
        throw new Error('Failed to fetch access token');
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