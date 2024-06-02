import { ChangeEvent } from "react";

type InputProps = {
    value: string;
    handleChange: (evt: ChangeEvent<HTMLInputElement>)=>void;
}
function Input({value, handleChange}:InputProps) {
  return (
    <input type="text" value={value} onChange={handleChange}/>
  )
}

export default Input;
