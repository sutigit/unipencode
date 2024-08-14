import React from "react";
import { useEffect, useState } from "react";
import { Progress, Chip, Button, Card, CardBody, CardFooter, Accordion, AccordionItem } from "@nextui-org/react";
import clsx from "clsx";

export default function ProjectChecklistForm({
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

    return (
        <Card className="bg-black p-10 gap-8">

            <p className="text-xl font-medium">Käydään läpi vielä hyvien avoimenkoodin käytänteiden tarkistuslista</p>

            <Accordion>
                <AccordionItem key="readme" aria-label="README" title="README">
                    <p className="p-3">Laalaalaa jotain tekstiä tähän</p>
                </AccordionItem>
                <AccordionItem key="code-of-conduct" aria-label="code of conduct" title="Menettelyohjeet">
                    <p className="p-3">Laalaalaa jotain tekstiä tähän</p>
                </AccordionItem>
                <AccordionItem key="contributing-guidelines" aria-label="contributing guideline" title="Osalistumisohjeet">
                    <p className="p-3">Laalaalaa jotain tekstiä tähän</p>
                </AccordionItem>
                <AccordionItem key="license" aria-label="license" title="Lisenssi">
                    <p className="p-3">Laalaalaa jotain tekstiä tähän</p>
                </AccordionItem>
                <AccordionItem key="security-policy" aria-label="security policy" title="Tietoturva käytäntö">
                    <p className="p-3">Laalaalaa jotain tekstiä tähän</p>
                </AccordionItem>
            </Accordion>

            <p className="text-xl font-medium">Tarkistettu</p>
            <Progress aria-label="checklist" value={60} color="success" className="" />
            <div className="flex flex-wrap gap-4">
                <Chip color="success" className="text-medium p-3">README</Chip>
                <Chip className="text-medium p-3">Menettelyohjeet</Chip>
                <Chip className="text-medium p-3">Osallistumisohjeet</Chip>
                <Chip className="text-medium p-3">Lisenssi</Chip>
                <Chip className="text-medium p-3">Tietoturva käytäntö</Chip>
            </div>

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