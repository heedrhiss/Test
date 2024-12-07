import { getTasks } from "../_services/api"
import { TaskProp } from "../_types/typeScripts"
import TaskItem from "./TaskItem"

interface PageProp {
  filter: string
}
export default async function Task({filter}:PageProp) {
  const tasks = await getTasks()
  // Taking 20 Tasks from the dummy API
 const tasksData:TaskProp[] = tasks.splice(0,20)

let filteredTasks:TaskProp[] = tasksData
if(filter === "all"){filteredTasks = tasksData}
if(filter === 'completed')filteredTasks = tasksData.filter((task:TaskProp)=>task.completed === true)
if(filter === "incomplete")filteredTasks = tasksData.filter((task:TaskProp)=>task.completed === false)
 
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center ">
    {
      filteredTasks.map((task:TaskProp, i:number)=>(
        <TaskItem key={i} data={task}/>
        ))}
    </div>
    )
}


