import { useContext, Fragment, useState, useEffect, useRef } from "react";
import { UserContext } from "../Provider/Provider.js";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EditTaskMenu() {
  const globalState = useContext(UserContext);
  const [saveEdit, setSaveEdit] = useState(false);
  const [title, setTitle] = useState(
    globalState.state.boards[globalState.boardActive].columns.length === 0 ||
      globalState.state.boards[globalState.boardActive].columns[
        globalState.viewTaskFrom
      ].tasks.length === 0
      ? ""
      : globalState.state.boards[globalState.boardActive].columns[
          globalState.viewTaskFrom
        ].tasks[globalState.viewTaskMenuActive].title
  );
  const [titleError, setTitleError] = useState(false);
  const checkForTitle = (e) => {
    function titleValid(text) {
      return /^[a-z ,.'-]+$/i.test(text);
    }
    if (titleValid(title)) {
    } else {
      setTitleError(true);
    }
  };
  const removeTitleError = (e) => {
    setTitleError(false);
  };
  const editTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const [desc, setDesc] = useState(
    globalState.state.boards[globalState.boardActive].columns.length === 0 ||
      globalState.state.boards[globalState.boardActive].columns[
        globalState.viewTaskFrom
      ].tasks.length === 0
      ? ""
      : globalState.state.boards[globalState.boardActive].columns[
          globalState.viewTaskFrom
        ].tasks[globalState.viewTaskMenuActive].description
  );
  const editDesc = (e) => {
    const desc = e.target.value;
    setDesc(desc);
  };
  const [subtasks, setSubTasks] = useState(
    globalState.state.boards[globalState.boardActive].columns.length === 0 ||
      globalState.state.boards[globalState.boardActive].columns[
        globalState.viewTaskFrom
      ].tasks.length === 0
      ? []
      : globalState.state.boards[globalState.boardActive].columns[
          globalState.viewTaskFrom
        ].tasks[globalState.viewTaskMenuActive].subtasks
  );
  const addSubtask = () => {
    subtasks.push({ title: "", isCompleted: false });
    setSubTasks([...subtasks]);
  };

  const [taskStatus, setTaskStatus] = useState(
    globalState.state.boards[globalState.boardActive].columns.length === 0 ||
      globalState.state.boards[globalState.boardActive].columns[
        globalState.viewTaskFrom
      ].tasks.length === 0
      ? []
      : globalState.state.boards[globalState.boardActive].columns[
          globalState.viewTaskFrom
        ].tasks[globalState.viewTaskMenuActive].status
  );

  const isFirstRender = useRef(true);

  useEffect(() => {
    setSaveEdit(false);
    if (globalState.editTaskMenu === false && globalState.changeBoard === true) {
      
      setTitle(
        globalState.state.boards[globalState.boardActive].columns.length ===
          0 ||
          globalState.state.boards[globalState.boardActive].columns[
            globalState.viewTaskFrom
          ].tasks.length === 0
          ? ""
          : globalState.state.boards[globalState.boardActive].columns[
              globalState.viewTaskFrom
            ].tasks[globalState.viewTaskMenuActive].title
      );
      setDesc(
        globalState.state.boards[globalState.boardActive].columns.length ===
          0 ||
          globalState.state.boards[globalState.boardActive].columns[
            globalState.viewTaskFrom
          ].tasks.length === 0
          ? ""
          : globalState.state.boards[globalState.boardActive].columns[
              globalState.viewTaskFrom
            ].tasks[globalState.viewTaskMenuActive].description
      );
      setSubTasks(
        globalState.state.boards[globalState.boardActive].columns.length ===
          0 ||
          globalState.state.boards[globalState.boardActive].columns[
            globalState.viewTaskFrom
          ].tasks.length === 0
          ? []
          : globalState.state.boards[globalState.boardActive].columns[
              globalState.viewTaskFrom
            ].tasks[globalState.viewTaskMenuActive].subtasks
      );

      setTaskStatus(
        globalState.state.boards[globalState.boardActive].columns.length ===
          0 ||
          globalState.state.boards[globalState.boardActive].columns[
            globalState.viewTaskFrom
          ].tasks.length === 0
          ? []
          : globalState.state.boards[globalState.boardActive].columns[
              globalState.viewTaskFrom
            ].tasks[globalState.viewTaskMenuActive].status
      );
      globalState.setChangeBoard(false)
    }
    isFirstRender.current = false; // toggle flag after first render/mounting
  }, [globalState, title, desc, subtasks, saveEdit]);

  const dispatchTask = (title, desc, taskStatus, subtasks) =>
    globalState.dispatch({
      type: "editTask",
      boardIndex: globalState.boardActive,
      columnsIndex: globalState.viewTaskFrom,
      taskActive: globalState.viewTaskMenuActive,
      title: title,
      description: desc,
      status: taskStatus,
      subtasks: subtasks,
    });
  const saveChanges = () => {
    if (titleError === false) {
      dispatchTask(title, desc, taskStatus, subtasks);
      globalState.closeEditTaskMenu();
    } else {
      setTitleError(true);
    }
  };

  return (
    <div
      className={` mx-auto left-0 right-0 w-full h-full ${
        globalState.editTaskMenu === true ? `absolute` : "hidden"
      }`}
    >
      <div
        className="absolute z-40  mx-auto left-0 right-0 bg-black opacity-50 w-full h-full "
        onClick={() => globalState.setEditTaskMenu(false)}
      ></div>
      <div
        className={`absolute top-[80px] mx-auto left-0 right-0 transition-all bg-[white] dark:bg-dark-gray min-w-[264px] max-w-[343px] min-h-[322px] z-40  p-[24px]  rounded-[6px] border-r border-light-lines dark:border-dark-lines `}
      >
        <div className="mb-[24px] flex items-center">
          <div className="flex items-center">
            <div className=" dark:text-white text-[18px] font-bold leading-[23px]">
              Edit Task
            </div>
          </div>
        </div>
        <div className="mb-[24px] text-medium-gray text-[13px] leading-[23px] ">
          <div>
            <div className="font-bold text-medium-gray  dark:text-white">
              Title
            </div>
            <div>
              <input
                onChange={editTitle}
                value={title}
                type="text"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${
                      titleError ? "border-red" : ""
                    } `}
                placeholder="e.g. Take coffee break"
                onBlur={checkForTitle}
                onFocus={removeTitleError}
              />
              <p
                className={`mt-2 text-pink-600 text-sm ${
                  titleError ? "visible" : "invisible"
                }`}
              >
                Please provide a valid title.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-[24px] text-medium-gray text-[13px] leading-[23px]">
          <div>
            <div className="font-bold text-medium-gray  dark:text-white">
              Description
            </div>
            <div className="">
              <textarea
                onChange={editDesc}
                value={desc}
                type="text"
                className={`mt-1 block w-full px-[15px] pt-[8px] pb-[33px] min-h-[112px] break-words bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    `}
                placeholder="e.g. It's always good to take a break. This 15 minute break will  recharge the batteries a little."
              />
            </div>
          </div>
        </div>
        <div className="mb-[16px] text-medium-gray  dark:text-white text-[12px]  font-bold leading-[15px]">
          Subtasks
        </div>
        <div className="mb-[24px]">
          {subtasks.map((data, key) => {
            return (
              <div
                key={key}
                className={`flex items-center text-[#828FA3] w-full mb-[12px] `}
              >
                <div className="w-full">
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                   "
                    value={data.title}
                    placeholder="e.g. Make coffee"
                    onChange={(e) => {
                      subtasks[key].title = e.target.value;
                      setSubTasks([...subtasks]);
                    }}
                  />
                </div>
                <div>
                  <XIcon
                    className="-mr-1 ml-2 h-5 w-5 text-purple hover:cursor-pointer"
                    aria-hidden="true"
                    onClick={() => {
                      subtasks.splice(key, 1);
                      setSubTasks([...subtasks]);
                      console.log(subtasks);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="mb-[24px] bg-light-lines w-full rounded-[20px] py-[8px] pb-[9px] px-[85px] text-purple text-[13px] font-bold"
          onClick={addSubtask}
        >
          + Add New Subtask
        </button>
        <div className="mb-[8px] dark:text-white text-medium-gray text-[12px] font-bold leading-[15px] ">
          Current Status
        </div>
        <Menu
          as="div"
          className="relative inline-block text-left w-full mb-[24px]"
        >
          <div>
            <Menu.Button className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-dark-gray text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              {taskStatus}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-purple"
                aria-hidden="true"
              />
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
                {globalState.state.boards[globalState.boardActive].columns
                  .length === 0 ||
                globalState.state.boards[globalState.boardActive].columns[
                  globalState.viewTaskFrom
                ].tasks.length === 0
                  ? ""
                  : globalState.state.boards[
                      globalState.boardActive
                    ].columns.map((data, key) => {
                      return (
                        <Menu.Item
                          key={key}
                          onClick={() => setTaskStatus(data.name)}
                        >
                          {({ active }) => (
                            <span
                              href="/#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {data.name}
                            </span>
                          )}
                        </Menu.Item>
                      );
                    })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <button
          className=" bg-purple w-full rounded-[20px] py-[8px] pb-[9px] px-[87px] text-white text-[13px]"
          onClick={() => saveChanges()}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditTaskMenu;
