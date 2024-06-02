import { PersonProps } from "./Person.types"

const Person = ({name}:PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  )
}

export default Person
