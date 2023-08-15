import { CreateButton } from "@/components/Buttons";
import { Search } from "@/components/Searchs";
import { MoviesTable } from "@/components/Tables";
import { GetList } from "@/server/getActions";

export default async function Admin() {
  const getMovies = await GetList()
  console.log(getMovies);
  
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-between my-4 items-center">
          <div className="w-1/4">
            <Search />
          </div>
          <CreateButton/>
        </div>
        <MoviesTable data={getMovies}/>
      </div>
    </>
  );
}
