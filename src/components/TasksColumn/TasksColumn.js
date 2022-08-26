import { useContext} from "react";
import { UserContext } from "../Provider/Provider.js";

function TasksColumn(props) {
  const globalState = useContext(UserContext);
  return (
    <div className="flex items-start justify-start w-full p-[24px]">
      {props.columns.map((data, key) => {
        return (
          <div key={key} className={`flex flex-col min-w-[280px] ${key === 0 ? '' : 'ml-[24px]'}`} onClick={() => globalState.setViewTaskFrom(key)}>
            <div className="text-medium-gray text-[12px] font-bold leading-[15px] tracking-wide">{data.name} ({data.tasks.length})</div>
            <div>
            {data.tasks.map((data, key) => {
              return(
               <Tasks key={key} taskTitle={data.title} subtaskslength={data.subtasks.length} taskKey={key} />
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TasksColumn;

function Tasks(props) {
  const globalState = useContext(UserContext);
  function viewTaskMenu(key){
    globalState.setViewTaskMenu(true)
    globalState.setViewTaskMenuActive(key)
  }
  return (
    <div className="flex items-center justify-center w-[280px] max-h-[150px] bg-[white] dark:bg-dark-gray px-[16px] py-[23px] rounded-[8px] mt-[28px] hover:cursor-pointer" onClick={() => viewTaskMenu(props.taskKey)} >
        <div className="flex flex-col w-full">
            <div className="text-black dark:text-[white] text-[15px] font-bold leading-[19px]">
                {props.taskTitle}
            </div>
            <div className="mt-[8px] text-medium-gray text-[12px] font-bold leading-[15px]">
                of {props.subtaskslength} subtasks
            </div>
        </div>
    </div>
  );
}
