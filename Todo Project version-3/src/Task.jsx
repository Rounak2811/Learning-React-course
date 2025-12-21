import { useContext, useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import { TodoItems } from "../store/todo-Items-store";

function Task() {
  // let [task, setTask] = useState("");
  // const updateTask = (event) => {
  //   setTask(event.target.value);
  // };
  // let [date, setDate] = useState();
  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  // };
  // const onListing = () => {
  //   handleAddButton(task, date);
  //   setTask("");
  //   setDate("");
  // };
  // using useRef hook will make our life more easier.

  let taskNameElement = useRef();
  let taskDateElement = useRef();
  const onListing = () => {
    handleAddButton(
      taskNameElement.current.value,
      taskDateElement.current.value
    );
    taskDateElement.current.value = "";
    taskNameElement.current.value = "";
  };
  const TodoItemObj = useContext(TodoItems);
  const handleAddButton = TodoItemObj.addNewItem;
  return (
    <>
      <div className="row">
        <div className="col-5">
          <div className="p-2">
            <label
              htmlFor="examplehtmlFormControlInput1"
              className="htmlForm-label"
            >
              Task
            </label>
            <br />
            <input
              type="text"
              className="htmlForm-control"
              id="examplehtmlFormControlInput1"
              placeholder="Enter task here"
              ref={taskNameElement}
            />
          </div>
        </div>
        <div className="col-5">
          <div className="p-2">
            <label htmlFor="date-picker">Date</label>
            <br></br>
            <input
              type="date"
              id="date-picker"
              className="htmlForm-control"
              ref={taskDateElement}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="p-2">
            <label
              htmlFor="examplehtmlFormControlInput1"
              className="htmlForm-label"
            >
              Action
            </label>
            <br />
            <button
              type="button"
              className="btn btn-success"
              onClick={onListing}
            >
              <IoAddCircle />
              {/* button */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
