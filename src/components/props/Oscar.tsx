//when the child is another React component
//What is the type of a React component?
//! - There are many, but safest bet: React.ReactNode

import React from "react"

type OscarProps = {
    children: React.ReactNode
}

function Oscar({children}:OscarProps) {
  return (
    <div>
      {children}
    </div>
  )
}

export default Oscar
