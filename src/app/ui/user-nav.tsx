import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { SignOut, Dashboard } from './buttons'

export default function UserNav({ session }: { session: any }) {
    
    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
                <div className='flex items-center gap-4'>
                    <p className='text-white'>Hello, {session.user.name}</p>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                            alt=""
                            src={session.user.image}
                            className="h-8 w-8 rounded-full"
                        />
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <MenuItem>
                        <Dashboard user={session.user.name}/>
                    </MenuItem>
                    <MenuItem>
                        <SignOut />
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}
