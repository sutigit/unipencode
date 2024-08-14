
import clsx from 'clsx';
import { Card, CardBody } from "@nextui-org/react";

export default function ProjectCreateStatus({ step, setStep }: { step: number, setStep: Function }) {
    const creationStages = [
        {
            title: "Valitse Github repositorio",
        },
        {
            title: "Kerro projektistasi",
        },
        {
            title: "Lisää kuvia",
        },
        {
            title: "Tarkistuslista",
        },
        {
            title: "Esikatsele",
        },
    ];

    return (
        <Card className='bg-beige min-w-80'>
            <CardBody className="flex w-full px-8 py-10">
                <div className="flex flex-col gap-4">


                    {/* Status items */}
                    {creationStages.map((stage, index) => (
                        <div
                            key={index}
                            className='flex items-center'>
                            <div className={clsx('w-4 h-4 rounded-full transition-all transition-duration-200 delay-300', { 'bg-green': index <= step }, { 'bg-zinc-300': index > step }, {'scale-150': index === step})}></div>
                            <p
                                className={clsx('font-medium pl-5 transition-color transition-duration-200 delay-300', { 'text-black': index <= step }, { 'text-zinc-400': index > step })}>
                                {stage.title}
                            </p>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}
