import { MdDelete } from "react-icons/md";
import { TodoItems } from "../store/todo-Items-store.jsx";
import { useContext } from "react";

function IndiTask({ taskName, taskDate}) {
  const todoItemContext = useContext(TodoItems);
  const onDeleteClick=todoItemContext.deleteItem;

  console.log("Items from context:", todoItemContext);
  return (
    <>
      <div className="p-2">
        <div className="row">
          <div className="col-5">{taskName}</div>
          <div className="col-5">{taskDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDeleteClick(taskName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default IndiTask;
