'use client';

import React from "react";
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname } from 'next/navigation'

interface Tab {
    title: string;
    href: string;
}

export default function InPageTabs({ tabs, centered = false }: Readonly<{ tabs: Tab[], centered?: boolean }>) {
    const pathname = usePathname();

    return (
        <div className={clsx("w-full flex gap-8", { 'justify-center': centered })}>
            {tabs && tabs.map((tab) => (
                <Link
                    className={clsx('pb-2 border-b-2 border-transparent', { 'font-medium text-pink border-b-2 border-pink ': pathname === tab.href })}
                    key={tab.title}
                    href={tab.href}>
                    {tab.title}
                </Link>
            ))}
        </div>
    );
}