import { Card, CardBody } from "@nextui-org/react";
import LinkGithubBtn from "@/app/ui/link-github-btn";

export default function GitHubNotLinked() {
    return (
        <Card className="w-full bg-lightblack p-6">
            <CardBody className="flex gap-6">
                <p>You <span className="text-pink font-medium">haven't linked your Github</span>  account. Link your Github account to get access to all features.</p>
                <LinkGithubBtn />
            </CardBody>
        </Card>
    );
}