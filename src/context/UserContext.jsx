import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    userId: 11,
    userName: "ajju",
    mailId: "ajju@gmail.com",
    isLoggedIn: true,
    role: "CUSTOMER",
  });

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
