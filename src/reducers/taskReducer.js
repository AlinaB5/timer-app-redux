import {
  ADD_TASK,
  START_TIMER,
  STOP_TIMER,
  TICK,
} from "../constants/actionTypes";

let startId = 0;
const generateNewID = () => startId++;

const initialState = {
  tasks: {},
  activeTask: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const taskId = generateNewID();
      const newTask = { id: taskId, name: action.name, elapsedTime: 0 };

      return {
        ...state,
        tasks: { ...state.tasks, [taskId]: newTask },
      };

    case START_TIMER:
      return { ...state, activeTask: action.taskId };

    case STOP_TIMER:
      return { ...state, activeTask: null };

    case TICK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [state.activeTask]: {
            ...state.tasks[state.activeTask],
            elapsedTime: state.tasks[state.activeTask].elapsedTime + 1,
          },
        },
      };

    default:
      return state;
  }
};

export default taskReducer;
