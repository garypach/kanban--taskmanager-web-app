import { useContext,Fragment } from "react";
import { UserContext } from "../Provider/Provider.js";
import { boardData } from "../../data";
import Checkbox from "react-custom-checkbox";
import IconCheck from "../../assets/icon-check.svg";

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ViewTaskMenu() {
  const globalState = useContext(UserContext);

  return (
    <div
      className={` mx-auto left-0 right-0 w-full h-full ${
        globalState.viewTaskMenu === true ? `absolute` : "hidden"
      }`}
    >
      <div
        className="absolute z-20 mx-auto left-0 right-0 bg-black opacity-50 w-full h-full "
        onClick={() => globalState.setViewTaskMenu(false)}
      ></div>
      <div
        className={`absolute top-[80px] mx-auto left-0 right-0 transition-all bg-[white] dark:bg-dark-gray min-w-[264px] max-w-[343px] min-h-[322px] z-30 p-[24px]  rounded-[6px] border-r border-light-lines dark:border-dark-lines `}
      >
        <div className="mb-[24px] flex items-center">
          <div className=" dark:text-white text-[18px] font-bold leading-[23px]">
            {
              boardData.boards[globalState.boardActive].columns[
                globalState.viewTaskFrom
              ].tasks[globalState.viewTaskMenuActive].title
            }
          </div>
        </div>

        <div className="mb-[24px] text-medium-gray text-[13px] leading-[23px]">
          {
            boardData.boards[globalState.boardActive].columns[
              globalState.viewTaskFrom
            ].tasks[globalState.viewTaskMenuActive].description
          }
        </div>
        <div className="mb-[16px] text-white text-[12px] leading-[15px]">
          Subtasks
        </div>
        <div className="mb-[24px]">
          {boardData.boards[globalState.boardActive].columns[
            globalState.viewTaskFrom
          ].tasks[globalState.viewTaskMenuActive].subtasks.map((data, key) => {
            return (
              <div key={key} className={`flex items-center text-[#828FA3] `}>
            
                  {data.isCompleted === true ? (
                    <div className="flex items-center bg-light-bg  dark:bg-dark-bg mb-[8px] pl-[12px] pt-[13px] pr-[8px] pb-[16px] rounded-[4px]">
                    <Checkbox
                      icon={
                        <img
                          className="text-white bg-purple w-[16px] h-[16px] rounded-[2px]"
                          src={IconCheck}
                          alt="IconCheck"
                        />
                      }
                      name="Subtasks"
                      checked={true}
                      // onChange={(value, event) => {
                      //   let p = {
                      //     isTrue: value,
                      //   };
                      // }}
                      borderColor="#FFFFFF"
                      style={{
                        cursor: "pointer",
                        color: "#FFFFFF",
                        background: "#FFFFFF",
                        borderWidth: "0px",
                        borderRadius: "2px",
                      }}
                   
                    />
                       <div className="text-black dark:text-white ml-[16px] leading-[15px] text-[12px] font-bold line-through opacity-50">{data.title}</div>
                    </div>
                  ) : (
                    <div className="flex items-center bg-light-bg  dark:bg-dark-bg mb-[8px] pl-[12px] pt-[13px] pr-[8px] pb-[16px] rounded-[4px]">
                    <Checkbox
                      icon={
                        <img
                          className="text-white bg-purple w-[16px] h-[16px] rounded-[2px]"
                          src={IconCheck}
                          alt="IconCheck"
                        />
                      }
                      name="Subtasks"
                      checked={true}
                      // onChange={(value, event) => {
                      //   let p = {
                      //     isTrue: value,
                      //   };
                      // }}
                      borderColor="#FFFFFF"
                      style={{
                        cursor: "pointer",
                        color: "#FFFFFF",
                        background: "#FFFFFF",
                        borderWidth: "0px",
                        borderRadius: "2px",
                      }}
               
                    />
                       <div className="text-black dark:text-white ml-[16px] leading-[15px] text-[12px] font-bold">{data.title}</div>
                    </div>
                    
                  )}
      
              </div>
            );
          })}
        </div>
          <div className="mb-[8px] text-white dark:text-medium-gray text-[12px] font-bold leading-[15px] ">
            Current Status
          </div>
          <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-dark-gray text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Options
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-purple" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg w-full bg-white dark:bg-dark-gray ring-1 dark:text-white ring-black ring-opacity-5 focus:outline-none">
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
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
    </div>
  );
}

export default ViewTaskMenu;
