'use client'

import { usePathname } from 'next/navigation'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import { signOutCredentials } from '../lib/actions';

export default function NavContent({ session }: { session: any }) {
    const pathname = usePathname()

    const pathnames = [
        {
            path: '/start-here',
            name: 'Start Here'
        },
        {
            path: '/explore/all',
            name: 'Explore'
        },
        {
            path: '/good-to-know',
            name: 'Good to Know'
        },
    ]


    return (
        <Navbar shouldHideOnScroll className="py-2">
            <NavbarBrand>
                <Button
                    href="/"
                    as={Link}
                    className="font-bold"
                    variant="light">
                    UniOpenCode
                </Button>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {pathnames.map(({ path, name }, index) => (
                    <NavbarItem key={index} isActive={pathname === path}>
                        <Link
                            aria-current={pathname === path}
                            color={pathname === path ? 'secondary' : 'foreground'}
                            href={path}>
                            {name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent as="div" justify="end">

                {
                    session ? (
                        <Dropdown placement="bottom-end" className="bg-lightblack p-2">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="default"
                                    name="avatar"
                                    size='sm'
                                    src="https://avatars.githubusercontent.com/u/117278596?v=4"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem textValue='create' key="create" href={`/${session.user.username}/create`}>
                                    Create new Project
                                </DropdownItem>
                                <DropdownItem textValue='dashboard' key="dashboard" href={`/${session.user.username}/dashboard/overview`}>
                                    Dashboard
                                </DropdownItem>
                                <DropdownItem textValue='settings' key="settings" href='/'>
                                    Settings
                                </DropdownItem>
                                <DropdownItem className='text-warning' textValue='logout' key="logout" color='warning' onPress={() => signOutCredentials()}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <div className="flex gap-2">
                            <LoginForm />
                            <SignupForm />
                        </div>
                    )
                }
            </NavbarContent>
        </Navbar>
    );
}
