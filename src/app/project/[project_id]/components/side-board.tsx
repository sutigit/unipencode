import { Divider, Avatar, Chip } from "@nextui-org/react";

export default function SideBoard() {

    const fakeContributors = [
        {
            image: "https://avatars.githubusercontent.com/u/117278596?v=4"
        },
        {
            image: "https://avatars.githubusercontent.com/u/116378573?v=4"
        },
    ]

    return (
        <section className="min-w-80 w-80 rounded-2xl flex flex-col gap-3 bg-black p-6">
            <div className="flex gap-2">
                <p className="text-medium font-medium">Osallistujat</p>
                <Chip>{fakeContributors.length}</Chip>
            </div>
            <Divider className="border-gray"></Divider>
            <div className="flex gap-2 mb-6">
                {fakeContributors.map(({ image }, index) => (
                    <Avatar
                        as="button"
                        className="transition-transform"
                        color="default"
                        name="avatar"
                        size='sm'
                        src={image}
                    />
                ))}
            </div>
            <p className="text-medium font-medium">Kielet</p>
            <Divider className="border-gray"></Divider>
            <div className='flex gap-2 items-center'>
                <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                <p>
                    Javascript
                </p>
            </div>
        </section>
    );
}