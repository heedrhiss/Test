import { TaskProp } from "../_types/typeScripts"

interface TaskPageProp {
data : TaskProp
}
export default function Task({data}:TaskPageProp) {
  return (
    <div className={`w-52 text-md border-2 ${data.completed ? "border-green-500":"border-red-500"} px-3 py-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 my-3 h-40 hover:scale-105 transition-all duration-300 lg:text-lg lg:w-64 lg:h-48`}>
      <div className="">{data.id}</div>
      <div className="font-semibold">{data.title}</div>
      <div className="">{data.userId}</div>
    </div>
  )
}
