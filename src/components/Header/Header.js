import { useContext,Fragment } from "react";
import { UserContext } from "../Provider/Provider.js";
import logoMobile from "../../assets/logo-mobile.svg";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import addTask from "../../assets/icon-add-task-mobile.svg";
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import arrowUp from "../../assets/icon-chevron-up.svg";
import arrowDown from "../../assets/icon-chevron-down.svg";
import { boardData } from "../../data";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header(props) {
  const globalState = useContext(UserContext);
  
  return (
    <div className="bg-white dark:bg-dark-gray w-full flex justify-center items-center min-h-[64px] sticky top-0 z-50 md:min-h-[81px] lg:min-h-[96px] lg:relative">
      <nav className="text-[black] dark:text-[white] w-full flex justify-between items-center px-[16px] md:px-[26px] lg:px-[34px]">
        <div className="flex items-center">
          <div className="hover:cursor-pointer">
            <img className="md:hidden" src={logoMobile} alt="logo-mobile" />
            <img
              className="hidden md:block dark:md:hidden md:w-[152.53px] md:h-[25.22px]"
              src={logoDark}
              alt="logo-light"
            />
            <img
              className="hidden dark:md:block md:w-[152.53px] md:h-[25.22px]"
              src={logoLight}
              alt="logo-dark"
            />
          </div>
          <div className="hidden w-[1px] ml-[82.47px] mr-[24px] md:block md:min-h-[81px] lg:min-h-[96px] lg:ml-[113.47px]  dark:bg-dark-lines bg-light-lines"></div>
          <div className="hidden ml-[16px] md:ml-0 md:block">
            {boardData.boards[globalState.boardActive].name}
          </div>
          <div className="block ml-[16px] md:hidden" onClick={() => globalState.setMobileMenuActive(!globalState.mobileMenuActive)}>
            <div className="flex items-center">
              <div>{boardData.boards[globalState.boardActive].name}</div>
              <div className="ml-[8px]">
                {globalState.mobileMenuActive ? (
                  <img className="" src={arrowUp} alt="arrowUp" />
                ) : (
                  <img className="" src={arrowDown} alt="arrowDown" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-[48px] h-[32px] flex items-center justify-center bg-purple rounded-[24px] md:w-[192.62px] md:h-[48px] hover:bg-purple-hover hover:cursor-pointer ">
            <img className="md:hidden" src={addTask} alt="add-task" />
            <span className="hidden md:block text-[15px] font-bold leading-[19px] text-white">
              + Add New Task
            </span>
          </div>

          <div className="ml-[16px] ">
          <Menu as="div" className="inline-block">
      <div>
        <Menu.Button className="inline-flex rounded-md shadow-sm bg-white dark:bg-dark-gray text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <DotsVerticalIcon className="h-[20px] w-5 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-[22px] rounded-md z-30 shadow-lg w-[192px] bg-white dark:bg-dark-gray ring-1 dark:text-white ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit Board
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-red' : 'text-red',
                    'block px-4 py-2 text-sm '
                  )}
                >
                  Delete Board
                </a>
              )}
            </Menu.Item>
         
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
