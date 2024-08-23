import { Spinner } from "@nextui-org/spinner";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";
import Linker from "@/app/redirect/components/github-linker";
import { auth } from '@/auth';
import { UserSchema } from "@/app/lib/validations";

export default async function RedirectPage({ _, searchParams }: { _: any, searchParams: any }) {
    const session = await auth();

    if (!session || !session.user) {
        return notFound();
    }

    const code = searchParams['code'];
    const state = searchParams['state'];
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const accessTokenUrl = process.env.GITHUB_ACCESS_TOKEN_URL;

    // Check the state parameter that it responds with the same value that was sent
    // TODO: Generate a secure random state
    if (state !== 'uniopencode') {
        console.error('State parameter does not match');
        permanentRedirect('/error', RedirectType.replace);
    };

    if (!clientId || !clientSecret || !accessTokenUrl || !code) {
        console.error('Missing required parameters');
        permanentRedirect('/error', RedirectType.replace);
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
        permanentRedirect('/error', RedirectType.replace);
    }

    const ghResponse = await response.json();

    const validatedUserId = UserSchema.pick({ id: true }).safeParse({ id: session.user.id });

    if (!validatedUserId.success) {
        console.error('Invalid User Id:', validatedUserId.error);
        permanentRedirect('/error', RedirectType.replace);
    }

    return (
        <main className="h-screen w-full flex justify-center gap-8 items-center">
            <p className="text-3xl font-bold">Completing linking</p>
            <Spinner />
            <div className="hidden">
                <Linker ghResponse={ghResponse} userId={validatedUserId.data.id} />
            </div>
        </main>
    );
}