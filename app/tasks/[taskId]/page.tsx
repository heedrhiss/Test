import { getTask } from "@/app/_services/api"
import { TaskProp } from "@/app/_types/typeScripts"
import TaskItem from "../TaskItem";

type PageProps = {
  params: {
    taskId: number | string;
  };
};
  
  export default async function Page({params}:PageProps) {
    const task:TaskProp = await getTask(params?.taskId)
    
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-xl font-bold">Task {params.taskId}</h1>
      <TaskItem data={task}/>
    </div>
  )
}

