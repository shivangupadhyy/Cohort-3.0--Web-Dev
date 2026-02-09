//  export function Input({ placeholder, ref} : { placeholder: string; ref: any}){
//     return <div>
//         <input ref={ref} placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded" ></input>
//     </div>
// }

import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className="px-4 py-2 border rounded w-full"
      />
    );
  }
);
