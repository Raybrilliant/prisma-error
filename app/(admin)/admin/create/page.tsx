"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody} from "@nextui-org/card";
import { useState } from "react";
import { CreateMovie } from "@/server/postActions";

export default function Create() {

    const [isLoding,setLoading] = useState(false);
    const formHandler = async(e:FormData)=>{
      await CreateMovie(e)
    }

    return (
      <>
      <h1 className="text-2xl mb-5">Add New Movies</h1>
      <Card className="p-10 mx-auto">
        <form onSubmit={()=>setLoading(true)} action={formHandler}>
        <CardBody>
          <Input variant="bordered" name="title" label="Title" isRequired/>
          <div className="grid grid-cols-2 gap-4 w-full my-4">
          <Input variant="bordered" name="tmdbId" label="TMDB Id" isRequired/>
          <Input variant="bordered" name="year" label="Year" isRequired/>
          <Input variant="bordered" name="poster" label="Poster" isRequired/>
          <Input variant="bordered" name="film" label="Film"/>
          </div>
          <Button type="submit" className="ms-auto" isLoading={isLoding} >Save</Button>
        </CardBody>
        </form>
      </Card>
    </>
  );
}
