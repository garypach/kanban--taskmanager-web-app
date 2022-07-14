import React, { createContext, useState, useEffect } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    //current board
    const [boardActive, setBoardActive] = useState(0);
    
    //light and dark mode
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

    //hide sidebar
    const [hideSideBar, setHideSideBar] = useState(false);


    return (
      <UserContext.Provider value={{
           boardActive,
           setBoardActive,
           useLightMode,
           hideSideBar,
           setHideSideBar
           }}>
        {children}
      </UserContext.Provider>
    );
  };

export {UserContext, UserProvider};