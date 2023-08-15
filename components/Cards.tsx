"use client"
import { Card, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { useRouter } from "next/navigation"
import { MoviesModal, TrailerModal } from "./Modals"
import { Avatar, Button, CardBody, Chip, Divider } from "@nextui-org/react"
import { LikeButton } from "./Buttons"
import { FaEye } from "react-icons/fa"

type PosterCardProps = {
    slug:string,
    image:string,
    title:string,
    caption:string
}

export const PosterCard = ({slug,image,title,caption}:PosterCardProps)=>{
    const router = useRouter()
    const cardHandler = (slug:string)=>{        
        router.push(slug)
    }
    
    return (
        <>
        <button onClick={()=>cardHandler(slug)}>
        <Card radius="lg" className="w-full border-none hover:scale-110 transition ease-in-out" isFooterBlurred>
            <Image className="object-fill" src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <CardFooter className="flex-col flex absolute bottom-0 py-1 z-10">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="opacity-50">{caption}</p>
            </CardFooter>
        </Card>
        </button>
        </>
    )
}

// Main Movies Detail
type MoviesDetailCardProps = {
    movies : {
        id:number,
        backdrop_path:string,
        genres:[],
        original_language:string,
        original_title:string,
        overview:string,
        poster_path:string,
        release_date:string,
        runtime:number,
        vote_average:number
    }
    detail : {
        id:string,
        like:number,
        watch:number
    }
}

const makeDate = (e:string)=>{
    const date = new Date(e)
    const formattedDate = date.toLocaleDateString("en-AU",{
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    return formattedDate
}

const makeRuntime = (e:number)=>{
    return `${Math.floor(e/60)} Hour ${e%60} Min`
}

export const MoviesDetailCard = ({data}:{data :MoviesDetailCardProps})=>{
    return(
        <>
                <Card className="my-10">
            <div className="w-full rounded-t-xl h-[25em] relative">
                <img
                className="bg-center object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/original${data.movies.backdrop_path}`}
                ></img>
                <MoviesModal></MoviesModal>
            </div>
            <CardBody className="p-10">
                <div className="flex justify-between">
                    <h1 className="font-semibold text-2xl">{data.movies.original_title}</h1>
                    <div className="flex gap-3">
                        <Button isDisabled className="font-semibold">IMDb {data.movies.vote_average.toFixed(1)}</Button>
                        <LikeButton like={data.detail.like} id={data.detail.id}></LikeButton>
                    </div>
                </div>
                <Divider className="my-4"></Divider>
                <div className="flex justify-between gap-10">
                <img
                className="rounded-lg bg-center w-[25%] shadow-lg hover:scale-110 transition ease-in-out"
                src={`https://image.tmdb.org/t/p/w500${data.movies.poster_path}`}
                >
                </img>
                <section id="mid">
                    <h2 className="text-2xl font-semibold mb-3">{data.movies.original_title}</h2>
                    <p className="opacity-50">{data.movies.overview}</p>
                    <Divider className="my-3"></Divider>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                        <FaEye/> 
                        <p className="ms-2">{data.detail.watch}</p>
                        </div>
                        <p>Star</p>
                        <div className="flex gap-3">
                            <Chip variant="flat" color="secondary">{makeRuntime(data.movies.runtime)}</Chip>
                            <Chip variant="flat" color="secondary">{data.movies.genres.map((item:any)=>(<span className="mx-1" key={item.id}>{item.name}</span>))}</Chip>
                            <Chip variant="flat" color="secondary">{makeDate(data.movies.release_date)}</Chip>
                        </div>
                    </div>
                    <Divider className="my-3"></Divider>
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-2xl font-thin my-3">Details</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2">
                                <span className="font-semibold ">Director :</span><p className="opacity-50">Wes Anderson</p>
                                </div>
                                <div className="flex gap-2">
                                <span className="font-semibold ">Writers :</span><p className="opacity-50">Wes Anderson</p>
                                </div>
                                <div className="flex gap-2">
                                <span className="font-semibold ">Country :</span><p className="opacity-50">Wes Anderson</p>
                                </div>
                                <div className="flex gap-2">
                                <span className="font-semibold ">Language :</span><p className="opacity-50">Wes Anderson</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-thin my-3">Casts</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-center">
                                <Avatar src="https://www.themoviedb.org/t/p/w138_and_h175_face/gCjMdmW1DiPAClHVl4zHEIffIsE.jpg"></Avatar>
                                <p>Jason Schwartzman</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                <Avatar src="https://www.themoviedb.org/t/p/w138_and_h175_face/gCjMdmW1DiPAClHVl4zHEIffIsE.jpg"></Avatar>
                                <p>Jason Schwartzman</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                <Avatar src="https://www.themoviedb.org/t/p/w138_and_h175_face/gCjMdmW1DiPAClHVl4zHEIffIsE.jpg"></Avatar>
                                <p>Jason Schwartzman</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                <Avatar src="https://www.themoviedb.org/t/p/w138_and_h175_face/gCjMdmW1DiPAClHVl4zHEIffIsE.jpg"></Avatar>
                                <p>Jason Schwartzman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="right-bar">
                    <h2 className="text-2xl mb-3">Trailer</h2>
                    <TrailerModal data={{poster:data.movies.backdrop_path,video:data.movies.poster_path}}></TrailerModal>
                </section>
                </div>
            </CardBody>
        </Card>
        </>
    )
}