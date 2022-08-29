import { boardData } from "../data";

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
              const editBoard ={ 
                  name: action.name, 
                  columns: action.columns
              };
              const boards = Object.assign([], state.boards);
              boards[index] = editBoard
              return {
                boards: boards
              };
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
        default:
      return state;
}
}