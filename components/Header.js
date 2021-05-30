import React from 'react';
import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon';

function Header() {
    return (
        <div className="sticky top-0 bg-white flex items-center lg:px-5 shadow-md">
            {/* Left Header Icons */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} 
                height={40}
                layout="fixed"/>
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input 
                    className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                    type="text" 
                    placeholder="Search Facebook"/>
                </div>
            </div>
            {/* Middle Header Icons */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>
            {/* Right Header icons */}
            <div className="flex items-center sm: spacce-x-2 justify-end">
                {/* <Image/> */}
                <p className="whitespace-nowrap font-semibold pr-3">Benzo</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/><ChevronDownIcon className="icon"/>
            </div>
        </div>
    );
}

export default Header
