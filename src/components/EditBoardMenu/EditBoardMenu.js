import { useContext,useState } from "react";
import { UserContext } from "../Provider/Provider.js";
import { boardData } from "../../data";
import { XIcon } from "@heroicons/react/solid";

function EditBoardMenu() {
  const globalState = useContext(UserContext);
  const [title,setTitle] = useState('')
  const handleTitleInput = (e)=>{
    setTitle(e.target.value)
  }
  const[titleError,setTitleError] = useState(false)
  const checkForTitle =(e)=>{
      function titleValid(text){
          return /^[a-z ,.'-]+$/i.test(text)
      }
      if(titleValid(title)){
      }else{
        setTitleError(true)
      }
  }
  const removeTitleError =(e)=>{
    setTitleError(false)    
  }

  const[columns,setColumns] = useState(boardData.boards[globalState.boardActive].columns)
  const addColumns = () => {
    columns.push({ "name": "", "tasks": []});
    setColumns([...columns]);
  };
  return (
    <div
      className={` mx-auto left-0 right-0 w-full h-full ${
        globalState.editBoardMenu === true ? `absolute` : "hidden"
      }`}
    >
      <div
        className="absolute z-20 mx-auto left-0 right-0 bg-black opacity-50 w-full h-full "
        onClick={() => globalState.setEditBoardMenu(false)}
      ></div>
      <div
        className={`absolute top-[80px] mx-auto left-0 right-0 transition-all bg-[white] dark:bg-dark-gray min-w-[264px] max-w-[343px] min-h-[322px] z-30 p-[24px]  rounded-[6px] border-r border-light-lines dark:border-dark-lines `}
      >
        <div className="mb-[24px] flex items-center">
          <div className="flex items-center">
            <div className=" dark:text-white text-[18px] font-bold leading-[23px]">
                Edit Board
            </div>
          </div>
        </div>
        <div className="mb-[24px] text-medium-gray text-[13px] leading-[23px] ">
        <div>
            <div className="font-bold text-medium-gray  dark:text-white">
                Board Name
            </div>
           <div>
           <input
             onChange={handleTitleInput}
             value={title}
            
             type="text" className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${
                        titleError ? "border-red" : ""
                      } ` }       
            placeholder="e.g. Take coffee break"
             onBlur={checkForTitle}
             onFocus={removeTitleError}
           />
            <p className={`mt-2 text-pink-600 text-sm ${
                        titleError ? "visible" : "invisible"
                      }`}>
                Please provide a valid title.
            </p>
       </div>
         </div>
        </div>
        <div className="mb-[16px] text-medium-gray  dark:text-white text-[12px]  font-bold leading-[15px]">
          Board Columns
        </div>
        <div className="mb-[24px]">
          {columns.map((data, key) => {
            return (
              <div key={key} className={`flex items-center text-[#828FA3] w-full mb-[12px] `}>
                    <div className="w-full">
                          <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                   " value={data.name} 
                   placeholder="e.g. Web Design"
                   onChange={e => {
                    columns[key].name = e.target.value;
                    setColumns([...columns]);
                  }} />
                    </div>
                    <div>
                    <XIcon
                className="-mr-1 ml-2 h-5 w-5 text-purple hover:cursor-pointer"
                aria-hidden="true"
                onClick={() => {
                    columns.splice(key,1);
                    setColumns([...columns]);
                    console.log(columns)
                    
                }}
                        />
                    </div>
             
            </div>
            );
          })}
        </div>
        <button className="mb-[24px] bg-light-lines w-full rounded-[20px] py-[8px] pb-[9px] px-[85px] text-purple text-[13px] font-bold" onClick={addColumns}>
        + Add New Column
        </button>

        <button className=" bg-purple w-full rounded-[20px] py-[8px] pb-[9px] px-[87px] text-white text-[13px]">
              Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditBoardMenu;
