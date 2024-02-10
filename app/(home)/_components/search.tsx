"use client";

import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react"
import { Input } from "@/app/_components/ui/input";

const Search = ()=> {
  return(
    <div className="flex items-cente gap-2">
      <Input placeholder="Busque por uma barbearia..."/>
      <Button variant="default" >
        <SearchIcon size={20} />
      </Button>
    </div>
  )
}

export default Search;