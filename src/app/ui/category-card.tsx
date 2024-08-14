import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Item {
    title: string;
    img: {
        src: string;
    };
    numberOfProjects: number;
}

export default function CategoryCard({ item }: { item: Item }) {

    return (
        <Card shadow="sm" isPressable className="w-52 min-w-52">
            <CardBody className="overflow-visible p-0 bg-lightblack">
                <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    alt={item.title}
                    className="w-full object-cover aspect-square"
                    src={item.img.src}
                />
            </CardBody>
            <CardFooter className="flex text-sm text-white text-medium font-medium justify-between bg-lightblack p-4">
                <p>{item.title}</p>
                <p>{item.numberOfProjects}</p>
            </CardFooter>
        </Card>
    );
}
