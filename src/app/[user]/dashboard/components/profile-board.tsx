import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Chip, Button, Image, Divider } from "@nextui-org/react";
import { auth } from "@/auth"

export default async function ProfileBoard() {
    const session = await auth();

    return (
        <div className="flex flex-col gap-10">
            <div className="w-80 aspect-square">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    height="100%"
                    alt="avatar"
                    className="w-full object-cover h-[140px] bg-lightblack"
                    src="https://avatars.githubusercontent.com/u/117278596?v=4"
                />
            </div>
            <div>
                <p className="text-2xl font-medium">{session?.user.username}</p>
                <p className="text-2xl font-medium text-zinc-500">Sutigit</p>
                {/* <p className="my-8">Laalaalaa jotain profiili tekstiä</p>
                <Button>Edit profile</Button> */}
            </div>
        </div>
    );
}