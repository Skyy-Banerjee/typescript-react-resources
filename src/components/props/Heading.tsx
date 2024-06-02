import React from "react";

type HeadingProps = {
    children: string;
}

function Heading({children}: HeadingProps):React.JSX.Element {
  return (
   <h2>{children}</h2>
  )
}

export default Heading
