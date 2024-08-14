import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button, Image, Tabs, Tab, Chip } from "@nextui-org/react";
import Header from "@/app/ui/header";
import HeaderDivider from "@/app/ui/header-divider";


export default function Code() {
    const fakeTags = [
        "Aloittelijoille",
        "Fysiikka"
    ];

    return (
        <section>
            <Card className="bg-lightblack p-8">
                <CardHeader className="flex flex-col items-start gap-10">
                    <Header title="Placeholder" subtitle="By Sutigit" />
                    {/* Description */}
                    <p>
                        Projektin kuvaus laalaa, jotain tekstiä tähän vain jotta saan testattua miltä tämä näyttää.
                    </p>

                    {/* Links */}
                    <div className="flex gap-5">
                        {/* Github link */}
                        <Button
                            as={Link}
                            isExternal
                            href="https://github.com/nextui-org/nextui"
                            showAnchorIcon
                            className="text-black bg-pink"
                        >
                            View on Github
                        </Button>

                        {/* App link */}
                        <Button
                            as={Link}
                            isExternal
                            href="https://github.com/nextui-org/nextui"
                            showAnchorIcon
                            className="text-pink font-medium bg-gray"
                        >
                            View website
                        </Button>
                    </div>


                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>
        </section>
    );
}