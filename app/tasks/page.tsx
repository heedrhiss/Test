// import { useTasks } from "../_hooks/useTasks"

import Task from "../_components/Task";
import { getTasks } from "../_services/api";
import { TaskProp } from "../_types/typeScripts";


type TasksResponse = {
  tasks: TaskProp[];
  error: Error | null;
  isLoading: boolean;
};

export default async function page() {
  const tasks = await getTasks()
  // Taking 20 Tasks from the dummy API
 const tasksData = tasks.splice(0,20)
  return (
    <div className="p-5 flex flex-col items-start">
      <h1 className="font-bold text-xl my-5 lg:text-3xl px-5">Tasks Page</h1>
      <div className="flex flex-wrap gap-3 items-center justify-center ">
      {tasksData.map((task:TaskProp, i:number)=>(
        <Task key={i} data={task}/>
      ))}
      </div>
    </div>
  )
}

