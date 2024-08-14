import { Divider, Avatar, Chip } from "@nextui-org/react";

export default function SideBoard() {



    return (
        <section className="min-w-80 w-80 flex flex-col gap-16 bg-black p-6">

            <div className="flex flex-col gap-4">
                <p className="text-medium font-medium">Categories</p>
                <Divider className="border-gray"></Divider>
                <Chip className="bg-lightblack">Beginners</Chip>
                <Chip className="bg-lightblack">Web App</Chip>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-medium font-medium">Languages</p>
                <Divider className="border-gray"></Divider>
                <div className='flex gap-2 items-center'>
                    <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                    <p>
                        Javascript
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-medium font-medium">Tags</p>
                <Divider className="border-gray"></Divider>
                <Chip className="bg-lightblack">Physics</Chip>
                <Chip className="bg-lightblack">Computer Science</Chip>
            </div>
        </section>
    );
}