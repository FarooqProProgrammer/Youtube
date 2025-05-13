import {
    AppIcon,
    MenuIcon,
    MicIcon,
    NotificationIcon,
    VideoIcon,
    YoutubeIcon,
} from "@/lib/Icon";
import React from "react";
import { Input } from "../ui/input";
import { Mic2, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
    return (
        <div className="flex p-4 justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-4">
                <Button variant={'ghost'} size={'icon'}>
                    <MenuIcon />
                </Button>
                <YoutubeIcon />
            </div>
            <div className="hidden items-center sm:gap-2 md:flex xl:min-w-[400px]">
                <div className="flex flex-1 items-center bg-border-color p-[0.5px] pr-2 sm:space-x-2">
                    <Input
                        className="bg-background2 placeholder:text-gray-color text-gray-color border-0 focus:outline-none rounded-0"
                        placeholder="Search"
                    />
                    <div className="">
                        <Search color="#FFF" size={15} />
                    </div>
                </div>
                <div className="w-[40px] cursor-pointer flex justify-center items-center h-[40px] bg-black rounded-full">
                    <MicIcon />
                </div>
            </div>
            <div className="flex items-center sm:gap-2">
                <Button size={"icon"} variant={"ghost"}>
                    <VideoIcon />
                </Button>
                <Button size={"icon"} variant={"ghost"}>
                    <AppIcon />
                </Button>
                <Button size={"icon"} variant={"ghost"}>
                    <NotificationIcon />
                </Button>
                <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default Header;
