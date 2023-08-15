import { redirect } from "next/navigation"
import { prisma } from "./Database"

export const DeleteList = async (e:string)=>{
    await prisma.movies.delete({
        where:{
            slug:e
        }
    })

    redirect('..')
} 