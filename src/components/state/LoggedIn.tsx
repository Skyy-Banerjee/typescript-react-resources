import { useState } from "react";

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }
  function handleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
}

export default LoggedIn;
