import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Chip, Button, Image, Divider } from "@nextui-org/react";

export default function ProfileBoard() {
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
                <p className="text-2xl font-medium">Ben Panyanil</p>
                <p className="text-2xl font-medium text-zinc-500">Sutigit</p>
                <p className="my-8">Laalaalaa jotain profiili tekstiä</p>
                <Button>Muokkaa profiilia</Button>
                <div className="flex flex-col gap-3 py-8">
                    <div className="flex gap-2">
                        <Chip>6</Chip>
                        <p>Seuraajia</p>
                    </div>
                    <div className="flex gap-2">
                        <Chip>2</Chip>
                        <p>Seurattu</p>
                    </div>
                </div>
                <Divider className="border-gray"/>
                <p className="my-8 text-xl font-medium">Saavutukset</p>
            </div>
        </div>
    );
}