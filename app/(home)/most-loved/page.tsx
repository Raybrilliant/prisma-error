import { PosterCard } from '@/components/Cards'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h1 className='text-2xl mb-5'>Most Loved</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <PosterCard slug='dadwad' image='tcKBclNUdkas4Jis8RYYZnPdTIm.jpg' title='Asteroid City' caption='98 Likes' />
    </div>
    </>
  )
}
