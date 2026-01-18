const Type = ({
    onClick,
    type,
    placeholder,
}) => {
  return <span onClick={onClick}  className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer bg-blue-200`}>

    <input type={type} placeholder={placeholder}></input>
  </span>
}

export default Type
