import { getTasks } from "../_services/api"
import { TaskProp } from "../_types/typeScripts"
import ButtonActions from "./ButtonActions"

interface TaskItemProp {
data : TaskProp
}
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

function TaskItem({data}:TaskItemProp) {
  return (
    <div className={`w-52 text-md border-2 ${data.completed ? "border-green-500":"border-red-500"} px-3 py-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 my-3 h-40 hover:scale-105 transition-all duration-300 lg:text-lg lg:w-64 lg:h-48`}>
      <div className="">{data.id}</div>
      <div className="font-semibold">{data.title}</div>
      {/* Button Client Component for Interactions */}
      <ButtonActions id={data.id}/>
    </div>
  )
}
