import { useContext } from "react";
import { UserContext } from '../Provider/Provider.js';
import iconShowSideBar from "../../assets/icon-show-sidebar.svg";

function ShowSideBar() {
    const globalState =  useContext(UserContext);
  return (
    <div className="hidden items-center justify-center rounded-r-[100px] bg-purple  w-[56px] h-[48px] absolute bottom-[32px] z-20 hover:cursor-pointer lg:flex" onClick={() => globalState.setHideSideBar(!true)}>
       <img src={iconShowSideBar} alt='iconShowSideBar' />
    </div>
  );
}

export default ShowSideBar;


