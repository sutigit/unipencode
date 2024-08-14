import { Card, CardBody, Button } from "@nextui-org/react";

export default function GitHubNotLinked() {
    return (
        <Card className="w-full bg-lightblack p-6">
            <CardBody className="flex gap-6">
                <p>You <span className="text-pink font-medium">haven't linked your Github</span>  account yet. Link your Github account to get access to all features.</p>
                <Button className="bg-pink text-black font-medium self-start">
                    Link Github Account
                </Button>
            </CardBody>
        </Card>
    );
}