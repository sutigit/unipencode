'use client';
import { Button } from '@nextui-org/react';
import { timeAgo } from "@/app/lib/utils";
import { Card, CardBody, Pagination, Input, Select, SelectItem } from "@nextui-org/react";
import { githubAccounts } from '@/app/lib/fake-data';
import clsx from "clsx";

export default function RepositoryImportList({
    repositories,
    formData,
    setFormData,
    step,
    setStep
}: {
    repositories: any,
    formData: any,
    setFormData: Function,
    step: number,
    setStep: Function
}) {

    const importRepository = (repository: any) => {
        setFormData({ ...formData, repository });
        setStep(step + 1);
    };

    const cancelCreation = () => {
        setFormData({});
    }

    const continueCreation = () => {
        setStep(step + 1);
    }

    const RenderButton = ({ repository }: { repository: any }) => {

        if (!formData.repository?.id) {
            return (
                <Button
                    color='primary'
                    onPress={() => importRepository(repository)}>
                    Valitse
                </Button>
            )
        } else if (formData.repository?.id && formData.repository?.id !== repository.id) {
            return (
                <Button
                    isDisabled>
                    Valitse
                </Button>
            )
        } else if (formData.repository?.id && formData.repository?.id === repository.id) {
            return (
                <div className="flex gap-5">
                    <Button
                        color="warning"
                        onPress={() => cancelCreation()}>
                        Eiku
                    </Button>
                    <Button
                        color="primary"
                        onPress={() => continueCreation()}>
                        Jatka
                    </Button>
                </div>
            )
        }
    };

    return (
        <Card className="p-10 gap-8 bg-black">
            <p className="text-xl font-medium">Valitse GitHub repositorio</p>
            <div className='flex gap-5 items-stretch'>
                <Select
                    label="Github tili"
                    variant='bordered'
                    defaultSelectedKeys={'1'}
                >
                    {githubAccounts.map((item) => (
                        <SelectItem key={item.id}>
                            {item.login}
                        </SelectItem>
                    ))}
                </Select>
                <Input variant='bordered' type="text" label="Etsi" />
            </div>
            <div className=" flex flex-col gap-6">
                {repositories.map((repo: any) => (

                    // Repository card
                    <Card key={repo.id}>
                        <CardBody
                            className={
                                clsx("flex flex-row justify-between items-center p-6 transition-all transition-duration-200",
                                    { 'bg-lightblack': !formData.repository?.id || formData.repository?.id === repo.id },
                                    { 'bg-black opacity-40': formData.repository?.id && formData.repository?.id !== repo.id })}>
                            <div className="flex gap">
                                <p className="text-white font-medium">
                                    {repo.name}
                                    <span className="text-zinc-500">{` · ${timeAgo(repo.created_at)}`}</span>
                                </p>
                            </div>

                            <RenderButton repository={repo} />
                        </CardBody>

                    </Card>
                ))}
            </div>
            <div className='m-auto'>
                <Pagination isCompact showControls total={10} initialPage={1} />
            </div>
        </Card>
    )
}
