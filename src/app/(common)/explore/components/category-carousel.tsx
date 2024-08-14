'use client';
import { Divider, Button } from "@nextui-org/react";
import { categories } from "@/app/lib/fake-data";
import Category from "@/app/ui/category-card";
import { useState, useRef } from "react";

export default function CategoryCarousel() {
    const carouselWrapper = useRef<HTMLDivElement>(null);
    const carouselSlider = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);

    const next = () => {
        if (carouselWrapper.current && carouselSlider.current) {
            const parentBound = carouselWrapper.current.getBoundingClientRect();
            const carouselItem = carouselSlider.current.children

            for (let i = 0; i < carouselItem.length; i++) {
                const item = carouselItem.item(i) as HTMLDivElement;
                const itemBound = item.getBoundingClientRect();

                if (itemBound.right >= parentBound.right) {
                    setTranslateX(translateX - (itemBound.left - parentBound.left));
                    break;
                };
            };
        };
    };

    const prev = () => {
        if (carouselWrapper.current && carouselSlider.current) {
            const parentBound = carouselWrapper.current.getBoundingClientRect();
            const carouselItem = carouselSlider.current.children

            for (let i = carouselItem.length-1; i > 0; i--) {
                const item = carouselItem.item(i) as HTMLDivElement;
                const itemBound = item.getBoundingClientRect();

                if (itemBound.left <= parentBound.left) {
                    setTranslateX(translateX + (parentBound.right - itemBound.right));
                    break;
                };
            };
        };
    };

    return (
        <section>
            <div className="py-10">
                <div className="flex justify-between items-end pb-5">
                    <h2 className="text-2xl text-bold">Selaa kategorioita</h2>
                    <div className="flex gap-2">
                        <Button className="bg-gray" isIconOnly aria-label="left" onPress={() => prev()}>
                            {'<'}
                        </Button>
                        <Button className="bg-gray" isIconOnly aria-label="right" onPress={() => next()}>
                            {'>'}
                        </Button>
                    </div>
                </div>
                <Divider className="border-gray" />
            </ div>

            <div ref={carouselWrapper} className="overflow-x-hidden w-full pb-10">
                <div ref={carouselSlider} className='flex flex-row flow-nowrap gap-10 transition-transform' style={{transform: `translateX(${translateX}px)`}}>
                    {categories.map((category: any, index) => (
                        <Category key={index} item={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}