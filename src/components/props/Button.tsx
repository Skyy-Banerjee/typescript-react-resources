import { ReactElement, MouseEvent } from "react";

//Event Props
type BtnProps = {
    handleClick:(evt:MouseEvent<HTMLButtonElement>, id:number)=> void
}

function Button({handleClick}:BtnProps):ReactElement {
  return (
    <button onClick={(evt)=> handleClick(evt,1)}>
      Click Me!👆🏻
    </button>
  )
}

export default Button;
