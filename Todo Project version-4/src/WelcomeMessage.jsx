import style from "./WelcomeMessage.module.css";
import { TodoItems } from "../store/todo-Items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
    const TodoItemsObj = useContext(TodoItems);
    const TodoItemsFromContext = TodoItemsObj.items;
  return (
    <>
      {TodoItemsFromContext.length === 0 && (
        <p className={style.message}>Nothing to do, Enjoy your day.</p>
      )}
    </>
  );};

export default WelcomeMessage;
