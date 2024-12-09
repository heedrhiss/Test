import { notFound } from "next/navigation";
import { TaskProp } from "../_types/typeScripts";

export async function getTasks() {
const tasks = await fetch("https://jsonplaceholder.typicode.com/todos")
    // For Slowing down
   await new Promise((res) => setTimeout(res, 1000));
   try{ const data = await tasks.json()
   return data
   }catch(error){
    console.log(error)
       notFound()
   }
}
export async function getTask(id : number | string): Promise<TaskProp> {
  const tasks = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // For Slowing down
   await new Promise((res) => setTimeout(res, 1000));
   try{ const data = await tasks.json()
   return data
   }catch(error){
    console.log(error)
       notFound()
   }
}

export async function deleteTask(id : number): Promise<void> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete the task with id ${id}. Status: ${response.status}`);
      }
    //   console.log(`Post with id ${id} successfully deleted.`);
    } catch (error) {
        console.log(error)
        throw new Error("Error deleting post")
    }
  }

  export async function addTask(): Promise<void> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        body: JSON.stringify({
        completed: true,
        title: "newTask.title",
        userId: "newTask.userId",
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  
      if (!response.ok) {
        throw new Error(`Failed to add new task. Status: ${response.status}`);
      }
    
    } catch (error) {
        console.log(error)
        throw new Error("Error Adding task")
    }
    
  }
  