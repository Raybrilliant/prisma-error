"use server"

import { prisma } from "./Database"

export const GetList = async (e:string = "")=>{
    const res = await prisma.movies.findMany()
    return res
}

export const GetTMDb = async (e:string)=>{        
    const res = await fetch(`https://api.themoviedb.org/3/movie/${e}?language=en-US&api_key=1475b10b0b34f8fc289ca82e5d73d62d`,{
        headers:{accept:'application/json'},
        method:"GET",
    })

    try {
       return await res.json()
    } catch {
        return 'error'
    }
}

export const getMoviesDetail = async(e:string)=>{
    const getId = await GetList(e)
    const movies = await GetTMDb(getId[0].tmdb_id)
    const detail = getId[0]
    
    return {movies,detail};
}