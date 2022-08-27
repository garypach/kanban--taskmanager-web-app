import { useContext } from "react";
import { UserContext } from "../Provider/Provider.js";
import { boardData } from "../../data";

function DeleteTaskMenu() {
  const globalState = useContext(UserContext);

  return (
    <div
      className={` mx-auto left-0 right-0 w-full h-full ${
        globalState.deleteTaskMenu === true ? `absolute` : "hidden"
      } `}
    >
      <div
        className="absolute z-40  mx-auto left-0 right-0 bg-black opacity-50 w-full h-full "
        onClick={() => globalState.setDeleteTaskMenu(false)}
      ></div>
      <div
        className={`absolute top-[80px] mx-auto left-0 right-0 transition-all bg-[white] dark:bg-dark-gray min-w-[343px] max-w-[343px] md:max-w-[480px] z-40  p-[24px] rounded-[20px] border-light-lines dark:border-dark-lines`}
      >
        <div className="flex flex-col items-start">
          <div className="mb-[24px]  text-red text-[18px] font-bold leading-[23px]">
            Delete this task?
          </div>
          <div className="mb-[24px]  text-medium-gray text-[13px] font-bold leading-[23px]">
            Are you sure you want to delete the "
            {
             
             boardData.boards[globalState.boardActive].columns.length === 0 || boardData.boards[globalState.boardActive].columns[
              globalState.viewTaskFrom
            ].tasks.length  === 0 ? '' :   boardData.boards[globalState.boardActive].columns[
              globalState.viewTaskFrom
            ].tasks[globalState.viewTaskMenuActive].title
              
            }
            " task and its subtasks? This action cannot be reversed.
          </div>
          <div className="flex flex-col w-full items-center md:flex-row ">
            <button className="mb-[25px] md:mb-0 md:mr-[16px] bg-red w-full rounded-[20px] py-[8px] px-[126px] md:px-[78.5px] text-white">
              Delete
            </button>
            <button
              className="bg-light-bg dark:bg-white w-full rounded-[20px] py-[8px] px-[126px] md:px-[78.5px] text-purple"
              onClick={() => globalState.setDeleteTaskMenu(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteTaskMenu;
