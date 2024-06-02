import React from "react";

type AuthUser = {
    name: string;
    email: string;
  };

function User() {
  //const [user, setUser] = React.useState<AuthUser | null>(null); 
  const [user, setUser] = React.useState<AuthUser>({} as AuthUser);  //type assertion

  function handleLogin() {
    setUser({
        name: "Skyy",
        email: "skyy@example.com",
    })
  }

//   function handleLogout() {
//     setUser(null);
//   }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user?.name}</div>
      <div>User Email is {user?.email}</div>
    </div>
  );
}

export default User;
