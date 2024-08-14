import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Tabs, Tab, Chip } from "@nextui-org/react";
import Header from "@/app/ui/header";
import HeaderDivider from "@/app/ui/header-divider";


export default function Code() {
    const fakeTags = [
        "Aloittelijoille",
        "Fysiikka"
    ];

    return (
        <section>
            <Card className="bg-black p-8">
                <CardHeader className="flex flex-col items-start gap-10">
                    <Header title="Myyrä peli" subtitle="Luonut Sutigit"/>
                    {/* Description */}
                    <p>
                        Projektin kuvaus laalaa, jotain tekstiä tähän vain jotta saan testattua miltä tämä näyttää.
                    </p>
                    {/* App link */}
                    <Link
                        isExternal
                        href="https://github.com/nextui-org/nextui"
                        showAnchorIcon
                        className="text-indigo-400"
                    >
                        GitHub
                    </Link>
                    {/* Tags */}
                    <div className="flex gap-2">
                        {fakeTags.map((tag, index) => (
                            <Chip key={index} color="default">{tag}</Chip>
                        ))}
                    </div>
                </CardHeader>
                <CardBody>
                    
                </CardBody>
            </Card>
        </section>
    );
}