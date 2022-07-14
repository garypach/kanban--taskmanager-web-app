import { useContext,useState } from "react";
import { UserContext } from "../Provider/Provider.js";
import { boardData } from "../../data";
import iconBoard from "../../assets/icon-board.svg";
import iconDark from "../../assets/icon-dark-theme.svg";
import iconLight from "../../assets/icon-light-theme.svg";
import iconHideSideBar from "../../assets/icon-hide-sidebar.svg";
import Switch from "react-switch";
function Sidebar() {
  const globalState = useContext(UserContext);
  const [colorTheme,setTheme] = globalState.useLightMode();
  const [lightMode, setLightMode] =  useState(colorTheme === 'dark' ? false : true);

  const handleChange = nextChecked => {
    setTheme(colorTheme);
    setLightMode(nextChecked);
  };


  return (
    <div className={`hidden transition-all bg-[white] dark:bg-dark-gray  w-[261px] h-[100vh] absolute ${globalState.hideSideBar === false ? `left-0` : `left-[-500px]` } top-0 z-10 pt-[112px] border-r border-dark-lines md:block lg:w-[300px]`}>
      <div>
        {boardData.boards.map((data, key) => {
          return (
            <div
              key={key}
              className={`flex items-center pl-[32px] w-[240px] lg:w-[276px] h-[48px] rounded-r-[24px] text-[#828FA3] ${
                globalState.boardActive === key ? "bg-purple text-[white]" : ""
              } hover:cursor-pointer`}
              onClick={() => globalState.setBoardActive(key)}
            >
              <div className="flex items-center">
                <div>
                  <img className="" src={iconBoard} alt="iconBoard" />
                </div>
                <div className="ml-[16px] text-[15px] font-bold leading-[19px]">
                  {data.name}
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center pl-[32px] w-[276px] h-[48px] hover:cursor-pointer">
          <div className="flex items-center">
            <div>
              <img className="" src={iconBoard} alt="iconBoard" />
            </div>
            <div className="ml-[16px] text-[15px] font-bold leading-[19px] text-purple ">
              +Create New Board
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto absolute bottom-[96px] w-full">
        <div className="flex items-center justify-center w-[235px] h-[48px] rounded-[6px] bg-light-bg dark:bg-dark-bg">
        <label className="flex items-center">
            <img src={iconLight} alt="iconLight"/>

            <Switch
              className="mx-[23.67px]"
              onChange={handleChange}
              checked={lightMode}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor={'#635FC7'}
              offColor={'#635FC7'}
            />
            <img src={iconDark} alt="iconDark"/>
          </label>
        </div>
      
        </div>

        <div className="flex items-center justify-start mx-auto absolute bottom-[32px] w-full">
        <label className="flex items-center ml-[24px] lg:ml-[34px] hover:cursor-pointer" onClick={() => globalState.setHideSideBar(!false)} >
            <img src={iconHideSideBar} alt="iconHideSideBar"/>
            <span className=" ml-[15px] text-[15px] font-bold leading-[19px] text-medium-gray">Hide Sidebar</span>
        </label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
