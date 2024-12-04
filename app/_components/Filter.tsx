"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FilterButtonProps } from "../_types/typeScripts"

function Filter() {
    const searchParams = useSearchParams()
    const active = searchParams?.get("stat") ?? "all"

    return (
        <div className="flex border border-stone-800">
        <FilterButton active={active} filter="all">All</FilterButton>
        <FilterButton active={active} filter="completed">Completed</FilterButton>
        <FilterButton active={active} filter="incomplete">Incomplete</FilterButton>
        </div>
    )
}

const FilterButton = ({ children, filter, active }:FilterButtonProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    function handleClick(filter:string){
        const params = new URLSearchParams(searchParams)
        params.set("stat", filter)
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
        }
    return (
        <button className={`px-5 py-2 hover:bg-gray-700 hover:text-white ${active === filter ? "bg-gray-500 text-white" : ""}`} onClick={()=>handleClick(filter)}>
            {children}
        </button>
    )
}

export default Filter
