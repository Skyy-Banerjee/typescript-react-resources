// import Box from "./components/context/Box"
// import { ThemeContextProvider } from "./components/context/ThemeContext"

import User from "./components/context/User"
import { UserContextProvider } from "./components/context/UserContext"

function App() {
  return (
    <div>
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  )
}

export default App
