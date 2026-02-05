import type { ReactElement } from "react";

interface ButtonProps{
    variant : 'primary' | 'secondary';
    text: string;
    startIcon?: ReactElement;
}

const variantClasses = {
    primary : "bg-purple-600 text-white",
    secondary : "bg-purple-200 text-purple-400"
}

export function Button({variant , text, startIcon}: ButtonProps){

    return <button className={variantClasses[variant]}>
        {text}
    </button>
}