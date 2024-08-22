import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { getAuthenticatedUser } from "@/app/lib/github_actions";

export default async function GithubInfo({ access_token }: { access_token: string }) {

    const user = await getAuthenticatedUser({ access_token });

    return (
        <Card className="bg-lightblack p-6">
            <CardBody className="flex gap-6">
                <p>Your linked Github account:</p>
                <div className="flex gap-5 items-center">
                    <Image className="border" src={user.avatar_url} alt="avatar" width={30} height={30} />
                    <p className="font-bold text-xl">{user.login}</p>
                    <Button color="warning">Unlink</Button>
                </div>
            </CardBody>
        </Card>
    );
}