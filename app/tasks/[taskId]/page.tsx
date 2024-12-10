import { getTask } from "@/app/_services/api"
import { TaskProp } from "@/app/_types/typeScripts"
import TaskItem from "../TaskItem";

type PageProps = {
  params: Promise<{ taskId: string }>;
};
  
  export default async function Page({params}:PageProps) {
    const resolvedParams = await params;
    const { taskId } = resolvedParams;
    try {
      const task: TaskProp = await getTask(taskId);
      return (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-xl font-bold">Task {taskId}</h1>
          <TaskItem data={task} />
        </div>
      );
    } catch (error) {
      return <div>{error.message}Error loading task.</div>;
    }
    
}

