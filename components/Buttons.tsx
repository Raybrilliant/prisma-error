"use client"
import { DeleteList } from "@/server/deleteActions"
import { UpdateLike } from "@/server/postActions"
import { Button } from "@nextui-org/button"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {FaHeart} from "react-icons/fa"

export const LikeButton = ({like,id}:{like:number, id:string})=>{
    const [isLike,setLike] = useState(false)
    const [likeNumb,setLikeNumb] = useState(like)
    const likeNumberHandler = async ()=>{
        setLike(!isLike)
        {isLike ? setLikeNumb(likeNumb-1) : setLikeNumb(likeNumb+1)}
        {isLike ? await UpdateLike({data:{id,like:likeNumb-1}}) : await UpdateLike({data:{id,like:likeNumb+1}})}
    }
    
    return(
        <>
        <Button variant={isLike ? "solid" : "ghost"} color="danger" onClick={likeNumberHandler}><FaHeart/> Like {likeNumb}</Button>
        </>
    )
}

export const CreateButton = ()=>{
    const router = useRouter()
    const createHandler = ()=>{
        router.push('/admin/create')
    }

    return (
        <>
          <Button onClick={createHandler}>Create</Button>
        </>
    )
}

export const DeleteButton = ({data}:any)=>{
    const {isOpen,onOpen,onOpenChange,onClose}=useDisclosure()
    const deleteHandler = (e:string)=>{
        DeleteList(e)
    }
    
    return(
        <>
        <Button color="danger" variant="flat" onClick={onOpen}>Delete</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader>Delete {data.title} !</ModalHeader>
                <ModalBody>
                    <p>Are you sure delete {data.title} ?</p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="light">Cancel</Button>
                    <Button color="danger" onClick={()=>{deleteHandler(data.id),onClose}} >Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}