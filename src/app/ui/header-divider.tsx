import { Divider, Button } from "@nextui-org/react";
import clsx from "clsx";

export default function Page({ title, hasDivider = true }: { title: string, hasDivider?: boolean }) {
    return (
        <main className="py-10">
            <div className="flex justify-between items-end pb-5">
                <h2 className="text-2xl text-bold">{title}</h2>
            </div>
            { hasDivider && <Divider className="border-gray" /> }
        </ main>
    );
}