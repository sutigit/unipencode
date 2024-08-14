import React from "react";
import { useEffect, useState } from "react";
// import { initProject } from "@/app/lib/actions";
import { Chip, Button, Image, Card, CardBody, CardFooter, Checkbox } from "@nextui-org/react";

import clsx from "clsx";

export default function ProjectIdentifiersForm({
    formData,
    setFormData,
    step,
    setStep
}: {
    formData: any,
    setFormData: Function,
    step: number,
    setStep: Function
}) {

    const [disabled, setDisabled] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const handleNext = () => {
        setFormData({
            ...formData,
        });
        setStep(step + 1);
    };

    const handleBack = () => {
        setFormData({
            ...formData,
        });
        setStep(step - 1);
    }


    const saveWithoutPublishing = () => {
        setDisabled(true);
    }

    const importedImages = [
        {
            src: "https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/04/101_ux_vs_ui_illustration_blog.png",
            alt: "test"
        },
        {
            src: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219162542/Become-UI-Designer-in-2023.png",
            alt: "test"
        },
        {
            src: "https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712793600&semt=ais",
            alt: "test"
        },
        {
            src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            alt: "test"
        }
    ]

    const Images = () => [1, 2, 3, 4].map((_, index) => {
        return (
            <Card
                key={index}
                isPressable
                onPress={() => setMainImage(index)}
                className={clsx("rounded-lg aspect-video", { 'outline-pink  outline-2': mainImage === index })}>
                <CardBody className="p-0">
                    <Image
                        shadow="sm"
                        height="100%"
                        width="100%"
                        alt={importedImages[index]?.alt || 'Image missing'}
                        className="rounded-lg aspect-video object-cover"
                        fallbackSrc="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        src={importedImages[index]?.src}
                    />
                </CardBody>
            </Card>
        )
    });


    return (
        <Card className="bg-black p-10 gap-8">

            <p className="text-xl font-medium">Lisää kuvia (vapaaehtoinen)</p>
            <div>
                <Button className="self-start mr-4">Lataa tietokoneeltasi</Button>
                <span>2/5</span>
            </div>

            <div className="grid grid-cols-4 gap-6 pb-8">
                <Images />
            </div>

            <p className="text-xl font-medium">Edustus kuva</p>

            <Card className="w-1/2 aspect-video outline-pink outline-4 ">
                <Image
                    shadow="sm"
                    width="100%"
                    radius="lg"
                    height="100%"
                    alt={importedImages[mainImage]?.alt || 'Image missing'}
                    className="aspect-video object-cover"
                    fallbackSrc="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    src={importedImages[mainImage]?.src}
                />
            </Card>

            <div className="mt-6 flex flex-end justify-between">
                <Button isDisabled={disabled} onPress={() => handleBack()}>Edellinen</Button>
                <div className="flex gap-5">
                    <Button isDisabled={disabled} variant="light" onPress={() => saveWithoutPublishing()}>Jatka myöhemmin</Button>
                    <Button color="primary" isDisabled={disabled} onPress={() => handleNext()}>Seuraava</Button>
                </div>
            </div>

        </Card>
    );
}