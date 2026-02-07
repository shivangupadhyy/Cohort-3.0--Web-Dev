import { Twitter } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function Sidebar(){
    return (
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 ">
           <div>
            <SideBarItem text="Twitter" icon={<Twitter/>}/>
            <SideBarItem text="Youtube" icon={<YoutubeIcon/>}/>
           </div>
        </div>
    )
}