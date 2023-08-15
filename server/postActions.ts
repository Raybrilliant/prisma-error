"use server"
import { redirect } from "next/navigation"
import { revalidatePath, revalidateTag } from "next/cache"
import { prisma } from "./Database"

export const CreateMovie = async (e:FormData) => {
    
    const slug:any = e.get('title')?.toString().toLowerCase()
    const slugConvert = slug.replace(/[^a-zA-Z0-9-]+/g, '-')
    slugConvert.replace(/^-+|-+$/g, '')

    const data = {
        data : {
            slug : `${slugConvert}`,
            tmdb_id : `${e.get('tmdbId')}`,
            title : `${e.get('title')}`,
            year : `${e.get('year')}`,
            poster :`${e.get('poster')}`,
            film : `${e.get('film')}`,
        }
    }
    const res = await prisma.movies.create(data)

    redirect('/admin')
}

export const UpdateLike = async({data}:{data:any})=>{

    const res = await prisma.movies.update({
        where:{
            slug: data.id
        }, data : {
            like:data.like
        }
    })

    console.log(res);
}