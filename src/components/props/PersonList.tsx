//Array types
import { Name } from "./Person.types";

type PersonListProps = {
  names:Name[]
}

function PersonList({names}:PersonListProps) {
  return (
    <div>
      {
        names.map((name,idx) => (
          <h3 key={idx}>
            {name.first} {name.last}
          </h3>
        ))
      }
    </div>
  )
}

export default PersonList
