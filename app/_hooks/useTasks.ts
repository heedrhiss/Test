"use client"

import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../_services/api";


export function useTasks(){
    const {data: tasks, error, isLoading} = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
    })

    return {tasks, error, isLoading}
}

//Not used to avoid client component at the Top level
//Tasks where fetched directly from the Server Component