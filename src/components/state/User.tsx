import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  // To create a useState with typescript we use angle brackets
  // Then we are able to pass in what the type the state can hold
  const [user, setUser] = useState<null | AuthUser>(null);
  // This useState doesn't require null and just use AuthUser as the state
  const [user2, setUser2] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Alex",
      email: "alexinga98@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
