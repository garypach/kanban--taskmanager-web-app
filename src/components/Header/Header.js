// import { useContext } from "react";
// import { UserContext } from '../Provider/Provider.js';
import logoMobile from '../../assets/logo-mobile.svg';
import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';
import addTask from '../../assets/icon-add-task-mobile.svg';
import elispe from '../../assets/icon-vertical-ellipsis.svg'
function Header() {
    // const globalState =  useContext(UserContext);
  return (
    <div className="bg-white dark:bg-dark-gray w-full flex justify-center items-center min-h-[64px] md:min-h-[81px] lg:min-h-[96px]">
        <nav className="text-[black] dark:text-[white] w-full flex justify-between items-center px-[16px] md:px-[26px]">
            <div className='flex items-center'>
            <div className='hover:cursor-pointer'>
                <img className="md:hidden" src={logoMobile} alt='logo-mobile'/>
                <img className="hidden md:block dark:md:hidden md:w-[152.53px] md:h-[25.22px]" src={logoDark} alt='logo-light'/>
                <img className="hidden dark:md:block md:w-[152.53px] md:h-[25.22px]" src={logoLight} alt='logo-dark'/>
            </div>
            <div className='hidden ml-[82.47px] mr-[24px] md:block md:min-h-[81px] lg:min-h-[96px] w-[1px] dark:bg-dark-lines bg-light-lines'>

            </div>
            <div className='ml-[16px] md:ml-0'>
                Platform Launch
            </div>
            </div>

            <div className='flex items-center'>
            <div className='w-[48px] h-[32px] flex items-center justify-center bg-purple rounded-[24px] md:w-[192.62px] md:h-[48px] hover:bg-purple-hover hover:cursor-pointer '>
                <img className="md:hidden" src={addTask} alt='add-task'/>
                <span className='hidden md:block text-[15px] font-bold leading-[19px]'>+ Add New Task</span>
            </div>

            <div className='ml-[16px] '>
                <img className="hover:cursor-pointer" src={elispe} alt='elispe'/>
            </div>
            </div>
           
        </nav>
    </div>
  );
}

export default Header;


