import { useEffect, useState } from "react";
import { Input, Button, Textarea, Card, CardBody, Image, Checkbox } from "@nextui-org/react";
import ProjectCard from "@/app/ui/project-card";
import Carousel from "@/app/ui/carousel";

export default function ProjectReviewForm({
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

    const publish = () => {
        setDisabled(true);
    };

    const saveWithoutPublishing = () => {
        setDisabled(true);
    }

    const handleBack = () => {
        setFormData({
            ...formData,
        });
        setStep(step - 1);
    }

    const importedImages = [
        {
            src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            alt: "test"
        },
        {
            src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            alt: "test"
        }
    ]


    return (
        <Card className="bg-black p-10 gap-8">

            <p className="text-xl font-medium">Esikatsele</p>
            <Input
                isReadOnly
                id="repository-name-review"
                type="url"
                label="Repositorion nimi"
                labelPlacement="outside"
                // defaultValue={selectedRepository?.name || ''}
                defaultValue="haloo"
            />
            <Input
                isReadOnly
                id="repository-url-review"
                type="url"
                label="Repositorion URL"
                labelPlacement="outside"
                // defaultValue={selectedRepository?.name || ''}
                defaultValue="haloo"
            />
            <Textarea
                isReadOnly
                id="description-review"
                label="Kuvaus"
                labelPlacement="outside"
                placeholder="(Tyhjä)"
                minRows={5}
                defaultValue="haloo"
            />
            <Input
                isReadOnly
                id="categories-review"
                type="text"
                label="Kategoriat"
                labelPlacement="outside"
                // defaultValue={selectedRepository?.name || ''}
                defaultValue="haloo"
            />

            <section>
                <p className="text-small mb-4">Lisätyt kuvat</p>
                <div className="grid grid-cols-4 gap-6 pb-8">
                    {importedImages.map((image, index) => (
                        <Card
                            key={index}>
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
                    ))}
                </div>
            </section>

            <section>
                <p className="text-small mb-4">Dokumentaatiot</p>
                <div className="flex flex-col gap-6 pb-8">
                    <Checkbox color="success" isReadOnly>README</Checkbox>
                    <Checkbox color="success" isReadOnly>Menettelyohjeet</Checkbox>
                    <Checkbox color="success" isReadOnly>Osallistumisohjeet</Checkbox>
                    <Checkbox color="success" isReadOnly>Lisenssi</Checkbox>
                    <Checkbox color="success" isReadOnly>Tietoturva käytäntö</Checkbox>
                </div>
            </section>


            <p className="text-xl font-medium">Mitä muut näkevät listauksissa</p>
            <div className="flex px-8">
                <ProjectCard project={formData.repository} />
            </div>

            <div className="mt-6 flex flex-end justify-between">
                <Button isDisabled={disabled} onPress={() => handleBack()}>Edellinen</Button>
                <div className="flex gap-5">
                    <Button isDisabled={disabled} variant="light" onPress={() => saveWithoutPublishing()}>Jatka myöhemmin</Button>
                    <Button color="success" isDisabled={disabled} onPress={() => publish()}>Julkaise</Button>
                </div>
            </div>
        </ Card>
    );
}