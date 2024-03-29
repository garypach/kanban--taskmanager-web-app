import React, { createContext, useState, useEffect,useRef} from "react";
import { initialState, reducer } from "../../Reducer/Reducer.js";
import { useImmerReducer } from "use-immer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(reducer, initialState);
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

    const closeTaskMenu = () =>{
      setViewTaskMenu(false);
      setViewTaskMenuActive(0);
      setViewTaskFrom(0);
    }
    //delete task
    const [deleteTaskMenu, setDeleteTaskMenu] = useState(false);

     //delete board
     const [deleteBoardMenu, setDeleteBoardMenu] = useState(false);

    //current board
    const [boardActive, setBoardActive] = useState(0);
    const [changeBoard, setChangeBoard] = useState(false);
    const isFirstRender = useRef(true)
    
    useEffect(() =>{
        if (!isFirstRender.current) { 
          if(boardActive === null){
            console.log(boardActive)
          }
          if(viewTaskMenuActive === null){
            console.log(viewTaskMenuActive)
          }
         
        }
      },[boardActive,viewTaskMenuActive])

      useEffect(() => { 
        isFirstRender.current = false // toggle flag after first render/mounting
      }, [])

    //AddTaskMenu
    const [addTaskMenu, setAddTaskMenu] = useState(false);
    const [addTaskFrom, setAddTaskFrom] = useState(boardActive);
    
    //EditTaskMenu
    const [editTaskMenu, setEditTaskMenu] = useState(false);
    const [editTaskFrom, setEditTaskFrom] = useState(viewTaskMenuActive);
    
    const closeEditTaskMenu = () =>{
      setEditTaskMenu(false);
      setViewTaskMenuActive(0);
      setViewTaskFrom(0);
    }
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
           state, 
           dispatch,
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
           setEditBoardMenu,
           closeTaskMenu,
           closeEditTaskMenu,
           changeBoard, setChangeBoard
           }}>
        {children}
      </UserContext.Provider>
    );
  };

export {UserContext, UserProvider};