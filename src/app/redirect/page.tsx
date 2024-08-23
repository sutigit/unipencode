import { Spinner } from "@nextui-org/spinner";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";
import Linker from "@/app/redirect/components/github-linker";
import { auth } from '@/auth';
import { UserSchema } from "@/app/lib/validations";
import { generateAccessToken } from "@/app/lib/github_actions";

export default async function RedirectPage({ _, searchParams }: { _: any, searchParams: any }) {
    const session = await auth();

    if (!session || !session.user) {
        return notFound();
    }

    const code = searchParams['code'];
    const state = searchParams['state'];
    
    const ghResponse = await generateAccessToken(code, state);

    if (!ghResponse) {
        console.error('Error fetching access token');
        permanentRedirect('/error', RedirectType.replace);
    }

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