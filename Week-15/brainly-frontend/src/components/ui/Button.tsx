export interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'sm' | 'md' | 'lg';
    onClick: () => void;
    text: string;
    startIcon?: any;
    endIcon?: any;
}

export const Button = (props : ButtonProps) =>{
    // props.variant
    // props.size
    // props.onClick
    // props.text
    // props.startIcon
    // props.endIcon
    return <button>Click Me</button>
}

<Button variant="primary" size="md" onClick={() => alert('Clicked!')} text="Submit"/>

