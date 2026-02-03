type Variants = "primary" | "secondary";

export interface ButtonProps {
    variant: Variants;
    size: 'sm' | 'md' | 'lg';
    onClick: () => void;
    text: string;
    startIcon?: any;
    endIcon?: any;
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white ",
    "secondary" : "bg-purple-300 text-purple-600 ",
}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-4 px-4",
    "lg" : "py-4 px-6",
}

const defaultStyle = "rounded-md flex"

export const Button = (props : ButtonProps) =>{
    // props.variant
    // props.size
    // props.onClick
    // props.text
    // props.startIcon
    // props.endIcon
    return <button className={`${defaultStyle} ${variantStyles[props.variant]} ${sizeStyles[props.size]}`}>
       {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
        </button>
}

<Button variant="primary" size="md" onClick={() => alert('Clicked!')} text="Submit"/>

