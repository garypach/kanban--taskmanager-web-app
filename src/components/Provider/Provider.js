import React, { createContext, useState, useEffect } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    //mobileMenuActive
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

     //AddNewBoardMenu
     const [addNewBoardMenu, setAddNewBoardMenu] = useState(false);

     //AddNewBoardMenu
     const [editBoardMenu, setEditBoardMenu] = useState(false);

    //ViewTaskMenu
    const [viewTaskMenu, setViewTaskMenu] = useState(false);
    const [viewTaskMenuActive, setViewTaskMenuActive] = useState(0);
    const [viewTaskFrom, setViewTaskFrom] = useState(0);

    //delete task
    const [deleteTaskMenu, setDeleteTaskMenu] = useState(false);

     //delete board
     const [deleteBoardMenu, setDeleteBoardMenu] = useState(false);

    //current board
    const [boardActive, setBoardActive] = useState(0);

    //AddTaskMenu
    const [addTaskMenu, setAddTaskMenu] = useState(false);
    const [addTaskFrom, setAddTaskFrom] = useState(boardActive);
    
    //EditTaskMenu
    const [editTaskMenu, setEditTaskMenu] = useState(false);
    const [editTaskFrom, setEditTaskFrom] = useState(viewTaskMenuActive);
    
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
           setHideSideBar,
           mobileMenuActive,
           setMobileMenuActive,
           viewTaskMenu,
           setViewTaskMenu,
           viewTaskMenuActive,
           setViewTaskMenuActive,
           viewTaskFrom,
           setViewTaskFrom,
           deleteTaskMenu,
           setDeleteTaskMenu,
           deleteBoardMenu,
           setDeleteBoardMenu,
           addTaskMenu, 
           setAddTaskMenu,
           addTaskFrom,
           setAddTaskFrom,
           editTaskMenu, 
           setEditTaskMenu,
           editTaskFrom,
           setEditTaskFrom,
           addNewBoardMenu,
           setAddNewBoardMenu,
           editBoardMenu, 
           setEditBoardMenu
           }}>
        {children}
      </UserContext.Provider>
    );
  };

export {UserContext, UserProvider};