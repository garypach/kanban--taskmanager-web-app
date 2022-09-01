import { boardData } from "../data";
import { current} from 'immer';

export const initialState = boardData

export const reducer = (state, action) => {
    switch (action.type) {
        case "addBoard":
        {
            const newBoard ={ 
                name: action.name, 
                columns: action.columns
            };
            return {
              boards: [...state.boards, newBoard],
            };
        }
        case "editBoard":
          {
              const index = action.index
              const editBoard = {};
              Object.defineProperties(editBoard, {
                name: {
                  value: action.name,
                  writable: true,
                },
                columns: {
                  value: action.columns,
                  writable: true,
                },
              });
              state.boards[index]=editBoard
              break
          }
          case "deleteBoard":
            {
                const index = action.index
                const boards = Object.assign([], state.boards);
                boards.splice(index, 1);
                return {
                  boards: boards
                };
            }
            case "addTask":
              {
                const task = {};
                Object.defineProperties(task, {
                  title: {
                    value: action.title,
                    writable: true,
                  },
                  description: {
                    value: action.desc,
                    writable: true,
                  },
                  status: {
                    value: action.status,
                    writable: true,
                  },
                  subtasks: {
                    value: action.subtasks,
                    writable: true,
                  },
                });
                for(let i = 0 ; i < state.boards[action.boardIndex].columns.length; i++){
                  if(state.boards[action.boardIndex].columns[i].name === task.status){
                    state.boards[action.boardIndex].columns[i].tasks.push(task)
                  }
                }
                console.log(current(state.boards))
                break
              }
            case "editTask":
              {
              
                const taskIndex = action.taskActive;
                const task = Object.assign({}, state.boards[action.boardIndex].columns[action.columnsIndex].tasks[taskIndex]);
                task.title = action.title;
                task.description = action.desc
                task.status = action.status
                task.subtasks = action.subtasks
                const tasks = Object.assign([], state.boards[action.boardIndex].columns[action.columnsIndex].tasks);
                tasks.splice(taskIndex, 1, task);
                console.log(tasks)
                console.log(current(state.boards))
                if(state.boards[action.boardIndex].columns[action.columnsIndex].name === task.status){
                  state.boards[action.boardIndex].columns[action.columnsIndex].tasks = tasks
                  for(let i = 0 ; i<state.boards[action.boardIndex].columns.length; i++){
                    if(state.boards[action.boardIndex].columns[i].name === task.status && i !== action.columnsIndex ){
                      state.boards[action.boardIndex].columns[i].tasks.push(task)
                    }
                  }
                }
                else if(state.boards[action.boardIndex].columns[action.columnsIndex].name !== task.status){
                  for(let i = 0 ; i<state.boards[action.boardIndex].columns.length; i++){
                    if(state.boards[action.boardIndex].columns[i].name === task.status){
                      state.boards[action.boardIndex].columns[i].tasks.push(task)
                    }
                    else{
                      state.boards[action.boardIndex].columns[i].tasks.splice(taskIndex, 1);
                    }
                  }
                }
                break
              }
        default:
      return state;
}
}