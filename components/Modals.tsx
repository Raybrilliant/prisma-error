import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { FaPlay, FaRegPlayCircle } from "react-icons/fa";

type TrailerModalProps = {
  video:string,
  poster:string
}

export const TrailerModal = ({data}:{data:TrailerModalProps}) => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <>
      <div className="w-[20em] aspect-video h-1/2">
        <div className="w-full relative">
          <img
            className="object-fill bg-center"
            src={`https://www.themoviedb.org/t/p/w500${data.poster}`}
          />
          <button
            type="button"
            onClick={onOpen}
            className="text-3xl hover:scale-125 transition ease-in-out absolute bottom-[40%] right-[43%]"
          >
            <FaPlay />
          </button>
        </div>
        <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            <ModalBody className="w-full aspect-video">
              <iframe
                className="object-fill w-full h-full"
                src={`https://www.youtube.com/embed/${data.video}`}
              ></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export const MoviesModal = () => {
  const {isOpen,onOpen,onOpenChange} = useDisclosure()
  return (
    <>
    <div className="grid grid-cols-2 absolute items-center bottom-0 hover:backdrop-invert p-5 transition ease-in-out">
      <button type="button" className="text-[6em] hover:scale-110 transition ease-in-out mx-auto" onClick={onOpen}><FaRegPlayCircle/></button>
      <div className="flex flex-col">
        <h1 className="font-semibold text-4xl ">Watch Now</h1>
        <p className="font-thin">Start your free movies now</p>
      </div>
    </div> 

    <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalBody className="w-full aspect-video">
        <iframe
                className="object-fill w-full h-full"
                src="https://www.youtube.com/embed/9FXCSXuGTF4"
              ></iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )
}
