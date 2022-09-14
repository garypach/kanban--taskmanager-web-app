import { useContext,useState } from "react";
import { UserContext } from "../Provider/Provider.js";
import { boardData } from "../../data";
import iconBoard from "../../assets/icon-board.svg";
import iconDark from "../../assets/icon-dark-theme.svg";
import iconLight from "../../assets/icon-light-theme.svg";
import Switch from "react-switch";
function MobileMenu() {
  const globalState = useContext(UserContext);
  const [colorTheme,setTheme] = globalState.useLightMode();
  const [lightMode, setLightMode] =  useState(colorTheme === 'dark' ? false : true);

  const handleChange = nextChecked => {
    setTheme(colorTheme);
    setLightMode(nextChecked);
  };

  const handleAddNewBoard = () => {
    globalState.setMobileMenuActive(false)
    globalState.setAddNewBoardMenu(true)
    console.log('click')
  };

  
  return (
    <div className={` mx-auto left-0 right-0 w-full h-full  ${globalState.mobileMenuActive === true ? `absolute` : 'hidden'} md:hidden`}>
        <div className="absolute z-20 mx-auto left-0 right-0 bg-black opacity-50 w-full h-full " onClick={() => globalState.setMobileMenuActive(false)}></div>
    <div className={`absolute top-[80px] mx-auto left-0 right-0 transition-all bg-[white] dark:bg-dark-gray w-[264px] h-[322px] z-30 py-[16px] border-r border-light-lines dark:border-dark-lines rounded-[24px] lg:hidden`}>
      <div className="mb-[10px] ml-[24px] lg:ml-[32px] text-medium-gray text-[12px] font-bold leading-[15px] tracking-wide">
      ALL BOARDS ({boardData.boards.length})
      </div>
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
        <div className="flex items-center pl-[32px] w-[276px] h-[48px] hover:cursor-pointer" onClick={() => handleAddNewBoard()}>
          <div className="flex items-center">
            <div>
              <img className="" src={iconBoard} alt="iconBoard" />
            </div>
            <div className="ml-[16px] text-[15px] font-bold leading-[19px] text-purple ">
              +Create New Board
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto mt-[16px] w-full">
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
      </div>
    </div>
    </div>
    
  );
}

export default MobileMenu;
