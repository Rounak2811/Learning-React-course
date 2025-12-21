import IndiTask from "./IndiTask.jsx";
import { TodoItems } from "../store/todo-Items-store.jsx";
import { useContext } from "react";

const Tasks = () => {
  const TodoItemsObj = useContext(TodoItems);
  const TodoItemsFromContext=TodoItemsObj.items;
  return (
    <>
      {TodoItemsFromContext.map((item) => (
        <IndiTask
          key={item.taskName}
          taskName={item.taskName}
          taskDate={item.taskDate}
        ></IndiTask>
      ))}
    </>
  );
};
export default Tasks;
