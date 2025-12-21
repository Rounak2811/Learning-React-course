import Heading from "./Heading.jsx";
import Task from "./task.jsx";
// import TaskList from "./TaskList.jsx";
import IndiTask from "./IndiTask.jsx"

function App() {

  const myTasks=[
    {
      taskDate:'20-11-2025',
      taskName:'Go to gym'
    },
    {
      taskDate:'20-11-2025',
      taskName:'College Lecture'
    }
  ];

  return (
    <>
      <Heading/>
      <Task/>
      {/* <IndiTask taskName="Go to gym" taskDate="20-11-2025"></IndiTask>
      <IndiTask taskName="College Lecture" taskDate="20-11-2025"></IndiTask> */}
      {myTasks.map((item)=>(
        <IndiTask key={item.taskName} taskName={item.taskName} taskDate={item.taskDate}></IndiTask>
      ))}
    </>
  );
}

export default App;
