//Extracting a component's prop types
import Greet from "../props/Greet"
function CustomComponents(props: React.ComponentProps<typeof Greet>) {
  return (
    <div>
      {props.isLoggedIn}
    </div>
  )
}

export default CustomComponents
