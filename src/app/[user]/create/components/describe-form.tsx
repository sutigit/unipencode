import React from "react";
import { useEffect, useState } from "react";
// import { initProject } from "@/app/lib/actions";
import { Input, Chip, Button, Textarea, Card, CardHeader, CardBody, CardFooter, CheckboxGroup, Checkbox } from "@nextui-org/react";
import { projectDescriptionHelpers } from "@/app/lib/fake-data";
import { categories } from "@/app/lib/fake-data";
import clsx from "clsx";

export default function ProjectDocumentationForm({
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


            <p className="text-xl font-medium">Kuvaile projektiasi muille</p>
            <div className="flex flex-col gap-4">
                <Textarea
                    placeholder="Kirjoita lyhyt kuvaus projektistasi"
                    minRows={5}
                />
            </div>

            <p className="text-xl font-medium">Kategorisoi</p>
            <CheckboxGroup>
                <div className="fex flex-rows flex-wrap">
                    {categories.map((category, index) => (
                        <Checkbox key={index} className="bg-gray p-4 m-2 rounded-2xl" value={category.title}>{category.title}</Checkbox>
                    ))}
                </div>
            </CheckboxGroup>

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