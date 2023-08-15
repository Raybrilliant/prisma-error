import { PosterCard } from '@/components/Cards'
import { Search } from '@/components/Searchs'
import { GetList } from '@/server/getActions'

export default async function Home() {
  const getMovies = await GetList()
  console.log(getMovies);
  
  return (
    <>
    <div className="w-1/4">
    <Search/>
    </div>
    <hr className='my-5' />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {getMovies.map((item:any)=>(
        <PosterCard key={item.id} slug={item.link} title={item.title} image={item.poster} caption={item.year}/>
      ))}
    </div>
    </>
  )
}
