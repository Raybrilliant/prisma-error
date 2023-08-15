"use client"

import { Card, Skeleton } from "@nextui-org/react"

const Loading = ()=>{
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        <Card radius="lg">
            <Skeleton className="w-full h-[300px] bg-default-300"/>
        </Card>
        </div>
        </>
    )
}
export default Loading