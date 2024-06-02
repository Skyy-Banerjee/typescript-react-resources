import { useContext } from "react";
import { UserContext } from "./UserContext";

function User() {
  const userContext = useContext(UserContext);
  function handleLogin() {
    if (userContext) {
      userContext.setUser({
        name: "Skyy",
        email: "skyy@example.com",
      });
    }
  }
  function handleLogout() {
    if (userContext) {
      userContext.setUser(null);
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name} </div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
}

export default User;
