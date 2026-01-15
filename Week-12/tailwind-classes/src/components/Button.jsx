const Button = ({
    disabled,
    children,
    onClick
}) => {
  return <div onClick={onClick}  className={`px-32 py-8 text-white cursor-pointer rounded-2xl text-4xl text-center my-5 mx-5 ${disabled ? "bg-blue-200" : "bg-green-400"} `}>
{children}
  </div>
}

export default Button
