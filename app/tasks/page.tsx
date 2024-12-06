// import { useTasks } from "../_hooks/useTasks" Not used, Implement Server side fetching

import { Suspense } from "react";
import Task from "./Task";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import Button from "../_components/Button";

type Props = {
  searchParams: {
    stat: string
  }
}

export default function Page({searchParams}:Props) {  
  const filter =  searchParams?.stat ?? "all";
  
  return (
    <div className="p-5 flex flex-col items-start">
      <div className="flex flex-col md:flex-row items-center justify-between w-full my-5 space-y-3 md:space-y-0">
      <h1 className="font-bold text-xl lg:text-3xl px-5">Tasks Page</h1>
      <Filter/>
      <Button type="secondary">Add Task</Button>
      </div>
      <Suspense fallback={<Spinner/>} key={filter}>
        {/* Task Component is fetching data on the Server side */}
        {filter && <Task filter={filter}/>}
      </Suspense>
    </div>
  )
}

