import { Logo } from "../icons/Logo";
import { Twitter } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function Sidebar(){
    return (
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0  pl-6">
            <h1 className="flex text-2xl pt-4 font-bold underline text-gray-700 items-center">
                <div className="pr-4 pl-1.5 text-purple-600">
                    <Logo/>
                </div>
                Brainly
            </h1>
           <div className="pt-4 pl-4">
            <SideBarItem text="Twitter" icon={<Twitter/>}/>
            <SideBarItem text="Youtube" icon={<YoutubeIcon/>}/>
           </div>
        </div>
    )
}