// import { useTasks } from "../_hooks/useTasks" Not used, Implement Server side fetching

import { Suspense } from "react";
import Task from "../_components/Task";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

type Props = {
  searchParams: {
    stat: string
  }
}
export default function Page({searchParams}:Props) {  
  const filter =  searchParams?.stat ?? "all";
  
  return (
    <div className="p-5 flex flex-col items-start">
      <div className="flex items-center justify-between w-full">
      <h1 className="font-bold text-xl my-5 lg:text-3xl px-5">Tasks Page</h1>
      <Filter/>
      </div>
      <Suspense fallback={<Spinner/>} key={filter}>
        {/* Task Component is fetching data on the Server side */}
        {filter && <Task filter={filter}/>}
      </Suspense>
    </div>
  )
}

