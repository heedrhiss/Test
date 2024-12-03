import { notFound } from "next/navigation";

export async function getTasks() {
const tasks = await fetch("https://jsonplaceholder.typicode.com/todos")
    // For Slowing down
   await new Promise((res) => setTimeout(res, 1000));
   try{ const data = await tasks.json()
   return data
   }catch(error){
       notFound()
   }
}