"use client"
import { Input } from "@nextui-org/react"
import { useRouter } from "next/navigation";
import { useState } from "react"

export const Search = ()=>{
    const router = useRouter();
    const [value,setValue] = useState('');
    const searchHandler = ()=>{
        router.push(`?s=${value}`)
    }
    return (
        <>
        <Input variant="bordered" type="search" placeholder="Search Everythings.." onChange={(e)=>{setValue(e.target.value)}} onKeyUp={(e)=>{
            if (e.key == "Enter") {
                searchHandler();
            }
        }} />
        </>
    )
}