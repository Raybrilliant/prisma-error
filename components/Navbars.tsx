"use client"
import { Link } from "@nextui-org/react"
import { usePathname, useRouter} from 'next/navigation'
import { FaHeart, FaHome, FaHourglassHalf } from "react-icons/fa"

export const HomeNavbar = () => {
    const router = useRouter()
    const currentPath = usePathname(); 
    const navHandler = (link:string)=>{
        router.push(link)
    }
    return(
        <>
    <h1 className="text-3xl font-semibold mb-10">Gabutverse</h1>    
    <nav className="flex flex-1 flex-col gap-3">
        <Link className={`text-xl cursor-pointer ${currentPath == '/' ? 'font-semibold' : ''}`} color={currentPath == '/' ? 'secondary' : 'foreground'} onClick={()=>navHandler('/')}><span className="mx-2"><FaHome/></span>Home</Link>
        <Link className={`text-xl cursor-pointer ${currentPath == '/most-loved' ? 'font-semibold' : ''}`} color={currentPath == '/most-loved' ? 'secondary' : 'foreground'} onClick={()=>navHandler('most-loved')}><span className="mx-2"><FaHeart/></span>Most Loved</Link>
        <Link className={`text-xl cursor-pointer ${currentPath == '/coming-soon' ? 'font-semibold' : ''}`} color={currentPath == '/coming-soon' ? 'secondary' : 'foreground'} onClick={()=>navHandler('coming-soon')}><span className="mx-2"><FaHourglassHalf/></span>Coming Soon</Link>
    </nav>
        </>
    )
}
export const AdminNavbar = () => {
    const router = useRouter()
    const currentPath = usePathname(); 
    const navHandler = (link:string)=>{
        router.push(link)
    }
    return(
        <>
    <h1 className="text-3xl font-semibold mb-10">Gabutverse</h1>    
    <nav className="flex flex-1 flex-col gap-3">
        <Link className={`text-xl cursor-pointer ${currentPath == '/admin' ? 'font-semibold' : ''}`} color={currentPath == '/admin' ? 'secondary' : 'foreground'} onClick={()=>navHandler('/admin')}><span className="mx-2"><FaHome/></span>Home</Link>
        <Link className={`text-xl cursor-pointer ${currentPath == '/admin/requested' ? 'font-semibold' : ''}`} color={currentPath == '/admin/requested' ? 'secondary' : 'foreground'} onClick={()=>navHandler('admin/requested')}><span className="mx-2"><FaHourglassHalf/></span>Requested</Link>
    </nav>
        </>
    )
}
