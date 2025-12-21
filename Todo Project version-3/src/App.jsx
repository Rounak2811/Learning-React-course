import Heading from "./Heading.jsx";
import Task from "./Task.jsx";
import Tasks from "./Tasks.jsx";
// import TaskList from "./TaskList.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import { TodoItems } from "../store/todo-Items-store.jsx";
import IndiTask from "./IndiTask.jsx";
import { useContext, useState } from "react";

function App() {
  const myTasks = [];
  const [taskList, setMyTasks] = useState(myTasks);
  const handleAddButton = (taskName, taskDate) => {
    // console.log(taskName + "-->" + taskDate);
    const newTask = { taskDate: taskDate, taskName: taskName };
    //console.log(newTask);
    // let newTaskList = [...taskList, newTask];
    // setMyTasks(newTaskList);
    setMyTasks((currVal) => {
      const newTaskList = [...currVal, newTask];
      return newTaskList;
    });
  };

  const handleDelete = (taskName) => {
    console.log(`Task with name : ${taskName} is deleted`);
    let newTaskList = taskList.filter((tasks) => tasks.taskName !== taskName);
    setMyTasks(newTaskList);
  };
  const taskListFromContext = useContext(TodoItems);

  return (
    <>
      <TodoItems.Provider value={
        {items:taskList,
          addNewItem:handleAddButton,
          deleteItem:handleDelete
        }}>
        <Heading />
        <WelcomeMessage />
        <Task/>
        {/* <IndiTask taskName="Go to gym" taskDate="20-11-2025"></IndiTask>
      <IndiTask taskName="College Lecture" taskDate="20-11-2025"></IndiTask> */}
        <Tasks/>
      </TodoItems.Provider>
    </>
  );
}

export default App;
