import { MoviesDetailCard } from "@/components/Cards"
import { getMoviesDetail } from "@/server/getActions"
import Link from "next/link"


type MoviesProps = {
    slug:string
}


const Movies = async ({params}:{params : MoviesProps}) =>{
    const getDetail = await getMoviesDetail(params.slug) 
    return(
        <>
        <section className="mt-10">
        <h1 className="text-5xl font-semibold">Watch</h1>
        <p><Link className="hover:underline" href="..">Home</Link> / <Link className="hover:underline" href={`/${getDetail.detail.slug}`}>{getDetail.movies.original_title}</Link></p>
        <MoviesDetailCard data={getDetail}/>
        </section>

        </> 
        )
}
export default Movies