import type { ReactElement } from "react";

export function SideBarItem({text, icon} :{
    text : string;
    icon : ReactElement
}) {
    return (
        <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center transition-colors duration-200 max-w-48 pl-4">
           <div className="p-2 pt-3.5">
            {icon}
           </div>
           <div className="p-2">
            {text}
           </div>
        </div>
    )
}