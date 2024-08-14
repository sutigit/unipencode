'use client';
import { useEffect, useState, useRef } from 'react';

import Status from './create-status';
import Import from './repository-list';
import Describe from './describe-form';
import Images from './images-form';
import Checklist from './checklist-form';
import Review from './review-form';
import clsx from 'clsx';


export default function Page({ repositories }: { repositories: any }) {
    const [step, setStep] = useState(0);

    const documentation = useRef<HTMLDivElement | null>(null);
    const identifiers = useRef<HTMLDivElement | null>(null);
    const checklist = useRef<HTMLDivElement | null>(null);
    const review = useRef<HTMLDivElement | null>(null);

    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (
            documentation.current &&
            identifiers.current &&
            checklist.current &&
            review.current
        ) {
            if (step === 0) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            else if (step === 1) {
                documentation.current.scrollIntoView({ behavior: 'smooth' });
            } else if (step === 2) {
                identifiers.current.scrollIntoView({ behavior: 'smooth' });
            } else if (step === 3) {
                checklist.current.scrollIntoView({ behavior: 'smooth' });
            } else if (step === 4) {
                review.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [step]);

    return (
        <main className='flex gap-10'>

            <section>
                <div className='sticky top-32'>
                    <Status step={step} setStep={setStep} />
                </div>
            </section>

            <section className='flex flex-col gap-16 grow'>
                <div className={clsx('relative transition-all transition-duration-200 rounded-2xl',{'outline outline-gray': step === 0 } ,{ 'outline-none opacity-30 pointer-events-none': step !== 0 })}>

                    <Import
                        repositories={repositories}
                        formData={formData}
                        setFormData={setFormData}
                        step={step}
                        setStep={setStep}
                    />
                </div>

                <div className={clsx('relative transition-all transition-duration-200 rounded-2xl',{'outline outline-gray': step === 1 } ,{ 'outline-none opacity-30 pointer-events-none': step !== 1 })}>

                    {/* hack for better positioned auto scroll */}
                    <div ref={documentation} className='absolute -top-32' />

                    <Describe
                        formData={formData}
                        setFormData={setFormData}
                        step={step}
                        setStep={setStep}
                    />
                </div>

                <div className={clsx('relative transition-all transition-duration-200 rounded-2xl',{'outline outline-gray': step === 2 } ,{ 'outline-none opacity-30 pointer-events-none': step !== 2 })}>

                    {/* hack for better positioned auto scroll */}
                    <div ref={identifiers} className='absolute -top-32' />

                    <Images
                        formData={formData}
                        setFormData={setFormData}
                        step={step}
                        setStep={setStep}
                    />
                </div>


                <div className={clsx('relative transition-all transition-duration-200 rounded-2xl',{'outline outline-gray': step === 3 } ,{ 'outline-none opacity-30 pointer-events-none': step !== 3 })}>

                    {/* hack for better positioned auto scroll */}
                    <div ref={checklist} className='absolute -top-32' />

                    <Checklist
                        formData={formData}
                        setFormData={setFormData}
                        step={step}
                        setStep={setStep}
                    />
                </div>


                <div className={clsx('relative transition-all transition-duration-200 rounded-2xl',{'outline outline-gray': step === 4 } ,{ 'outline-none opacity-30 pointer-events-none': step !== 4 })}>

                    {/* hack for better positioned auto scroll */}
                    <div ref={review} className='absolute -top-32' />

                    <Review
                        formData={formData}
                        setFormData={setFormData}
                        step={step}
                        setStep={setStep}
                    />
                </div>
            </section>
        </main>
    );
}