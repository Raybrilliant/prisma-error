"use client"
import { Button } from "@nextui-org/button"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table"
import { useRouter } from "next/navigation"
import { DeleteButton } from "./Buttons"

export const MoviesTable = ({data}:any)=>{
    const router = useRouter()
    const buttonHandler = (id:string)=>{
        router.push(`admin/edit/${id}`)
    }
    

    return(
        <>
        <Table>
            <TableHeader>
                <TableColumn>Title</TableColumn>
                <TableColumn>Watch</TableColumn>
                <TableColumn>Loved</TableColumn>
                <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((item:any)=>(
                <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.watches}</TableCell>
                    <TableCell>{item.likes}</TableCell>
                    <TableCell className="flex gap-3">
                        <Button color="warning" variant="flat" onClick={()=>buttonHandler(item.id)}>Edit</Button>
                        <DeleteButton data={{ title:item.title, id:item.id }}/>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}