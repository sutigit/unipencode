import { removeGithubTokens } from "@/app/lib/db_actions";
import { Card, CardBody, Image, Button } from "@nextui-org/react";

export default async function GithubUserInfo({ user, userId }: { user: any | null, userId: string }) {

    const augmentedRemoveGithubTokens = removeGithubTokens.bind(null, userId);

    return (
        <Card className="bg-lightblack p-6">
            <CardBody className="flex gap-6">
                <p>Your linked Github account:</p>
                <div className="flex gap-5 items-center">
                    <Image className="border" src={user?.avatar_url} alt="avatar" width={30} height={30} />
                    <p className="font-bold text-xl">{user?.login}</p>
                    <form id="remove-tokens-form" action={augmentedRemoveGithubTokens}>
                        <Button form="remove-tokens-form" color="warning" type="submit">Unlink</Button>
                    </form>
                </div>
            </CardBody>
        </Card>
    );
}