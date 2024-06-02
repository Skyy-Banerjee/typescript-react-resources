import Greet from "./components/props/Greet"
import Heading from "./components/props/Heading";
import Person from "./components/props/Person"
import PersonList from "./components/props/PersonList";
import Status from "./components/props/Status";
import Oscar from "./components/props/Oscar";
import Button from "./components/props/Button";
import Input from "./components/props/Input";
import Container from "./components/props/Container";

// - Types or Interfaces?
// - Suggested => Use 'types' when building applications and 'interfaces' when building libraries.
// - We move TYPES to seperate files and import them too, when we have lot more types
// - It is possible to extract a type and use it in multiple places.

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne 🦇',
  }

  const nameList = [
    {
      first:'Clark',
      last:'Kent 💪🏻',
    },
    {
      first:'Princess',
      last:'Diana 👑',
    },
    {
      first:'Barry',
      last:'Allen ⚡',
    },
  ];

  return (
    <div>
      <Greet name="Skyy" messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Christian Bale!</Heading>
      </Oscar>
      <Button handleClick={(evt)=>{
        console.log(`Button clicked! 👆🏻`, evt);
      }}/>
      <Input value="" handleChange={evt=>console.log(evt)
      }/>
      <Container styles={{border: `1px solid black`, padding:'1rem'}}/>
    </div>
  )
}

export default App
