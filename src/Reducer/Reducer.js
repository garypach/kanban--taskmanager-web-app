import { boardData } from "../data";
import { current } from "immer";

export const initialState = boardData;

export const reducer = (state, action) => {
  switch (action.type) {
    case "addBoard": {
      const newBoard = {
        name: action.name,
        columns: action.columns,
      };
      state.boards.push(newBoard);
      break;
    }
    case "editBoard": {
      const index = action.index;
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
      state.boards[index] = editBoard;
      break;
    }
    case "deleteBoard": {
      const index = action.index;

      if (index === state.boards.length - 1) {
        state.boards.pop();
      } else {
        state.boards.splice(index, 1);
      }
      break;
    }
    case "addTask": {
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
      for (let i = 0; i < state.boards[action.boardIndex].columns.length; i++) {
        if (state.boards[action.boardIndex].columns[i].name === task.status) {
          state.boards[action.boardIndex].columns[i].tasks.push(task);
        }
      }
      break;
    }
    case "deleteTask": {
      const taskIndex = action.taskActive;
      if (taskIndex === state.boards[action.boardIndex].columns[action.columnsIndex].tasks - 1) {
        state.boards[action.boardIndex].columns[action.columnsIndex].tasks.pop();
      } else {
        state.boards[action.boardIndex].columns[action.columnsIndex].tasks.splice(taskIndex, 1);
      }
      break;
    }
    case "editTask": {
      const taskIndex = action.taskActive;
      const task = Object.assign(
        {},
        state.boards[action.boardIndex].columns[action.columnsIndex].tasks[
          taskIndex
        ]
      );
      task.title = action.title;
      task.description = action.desc;
      task.status = action.status;
      task.subtasks = action.subtasks;
      const tasks = Object.assign(
        [],
        state.boards[action.boardIndex].columns[action.columnsIndex].tasks
      );
      tasks.splice(taskIndex, 1, task);
      console.log(tasks);
      console.log(current(state.boards));
      if (
        state.boards[action.boardIndex].columns[action.columnsIndex].name ===
        task.status
      ) {
        state.boards[action.boardIndex].columns[action.columnsIndex].tasks =
          tasks;
        for (
          let i = 0;
          i < state.boards[action.boardIndex].columns.length;
          i++
        ) {
          if (
            state.boards[action.boardIndex].columns[i].name === task.status &&
            i !== action.columnsIndex
          ) {
            state.boards[action.boardIndex].columns[i].tasks.push(task);
          }
        }
      } else if (
        state.boards[action.boardIndex].columns[action.columnsIndex].name !==
        task.status
      ) {
        for (
          let i = 0;
          i < state.boards[action.boardIndex].columns.length;
          i++
        ) {
          if (state.boards[action.boardIndex].columns[i].name === task.status) {
            state.boards[action.boardIndex].columns[i].tasks.push(task);
          } else {
            state.boards[action.boardIndex].columns[i].tasks.splice(
              taskIndex,
              1
            );
          }
        }
      }
      break;
    }

    case "checkMarkTask": {
      const taskIndex = action.taskActive;
      const subtaskIndex = action.subtaskIndex;
      state.boards[action.boardIndex].columns[action.columnsIndex].tasks[
        taskIndex
      ].subtasks[subtaskIndex].isCompleted =
        !state.boards[action.boardIndex].columns[action.columnsIndex].tasks[
          taskIndex
        ].subtasks[subtaskIndex].isCompleted;
      console.log(current(state.boards));
      break;
    }
    default:
      return state;
  }
};
