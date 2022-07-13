import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState("John Doe");
    const [theme, setTheme] = useState("dark");
    return (
      <UserContext.Provider value={{
           name,
           setName,
           theme,
           setTheme,
           }}>
        {children}
      </UserContext.Provider>
    );
  };

export {UserContext, UserProvider};