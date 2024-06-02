type GreetProps = {
    name:string,
    messageCount:number,
    isLoggedIn:boolean,
} 

function Greet({name='my friend', messageCount=0, isLoggedIn}:GreetProps) {
  return (
    <div>
      <h2>{isLoggedIn? `Hello ${name}! You have ${messageCount} unread messages!✉️`: `Welcome Guest!`}</h2>
    </div>
  )
}

export default Greet
