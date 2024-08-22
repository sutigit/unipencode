import { Card, CardBody } from "@nextui-org/react";
import LinkGithubBtn from "@/app/ui/link-github-btn";

export default function GitHubNotLinked() {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const authUrl = process.env.GITHUB_AUTHORIZATION_URL;
    const authRedirectUrl = process.env.GITHUB_AUTHORIZATION_REDIRECT_URL;

    if (!clientId || !authUrl || !authRedirectUrl) {
        throw new Error('Missing required configuration');
    }

    return (
        <Card className="w-full bg-lightblack p-6">
            <CardBody className="flex gap-6">
                <p><span className="text-pink font-medium">Github account not linked</span>. Link to get access to all features.</p>
                <LinkGithubBtn
                    clientId={clientId}
                    authUrl={authUrl}
                    authRedirectUrl={authRedirectUrl}
                />
            </CardBody>
        </Card>
    );
}