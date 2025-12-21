import Heading from "./Heading.jsx";
import Task from "./Task.jsx";
import Tasks from "./Tasks.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import { TodoItems } from "../store/todo-Items-store.jsx";
import IndiTask from "./IndiTask.jsx";
import { useContext, useReducer } from "react";

const todoItemsReducer = (currState, action) => {
  //reducer needs current state and action.
  let newState = currState;
  if (action.type === "NEW_ITEM") {
    const newTask = {
      taskDate: action.payload.taskDate,
      taskName: action.payload.taskName,
    };
    newState = [...currState, newTask];
  } else if (action.type === "DELETE_ITEM") {
    newState = currState.filter(
      (tasks) => tasks.taskName !== action.payload.taskName
    );
  }
  return newState;
};

function App() {
  const [taskList, dispatchTaskList] = useReducer(todoItemsReducer, []);

  const handleAddButton = (taskName, taskDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        taskName,
        taskDate,
      },
    };
    dispatchTaskList(newItemAction);
  };

  const handleDelete = (taskName) => {
    console.log(`Task with name : ${taskName} is deleted`);
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        taskName,
      },
    };
    dispatchTaskList(deleteItemAction);
  };
  
  const taskListFromContext = useContext(TodoItems);

  return (
    <>
      <TodoItems.Provider
        value={{
          items: taskList,
          addNewItem: handleAddButton,
          deleteItem: handleDelete,
        }}
      >
        <Heading />
        <WelcomeMessage />
        <Task />
        <Tasks />
      </TodoItems.Provider>
    </>
  );
}

export default App;
