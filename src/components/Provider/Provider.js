import React, { createContext, useState, useEffect } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [boardActive, setBoardActive] = useState(0);
    
    function useLightMode(){
      let tempTheme;
      if(localStorage.theme){
        tempTheme = localStorage.theme;
      }
      else{
        tempTheme = 'dark'
      }
      const [theme,setTheme] = useState(tempTheme);
      const colorTheme = theme === 'light' ? 'dark' : 'light';

      useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        localStorage.setItem('theme',theme);
      },[theme,colorTheme])

      return [colorTheme,setTheme]
    }

    return (
      <UserContext.Provider value={{
           boardActive,
           setBoardActive,
           useLightMode,
           }}>
        {children}
      </UserContext.Provider>
    );
  };

export {UserContext, UserProvider};