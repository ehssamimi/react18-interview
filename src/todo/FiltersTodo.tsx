import React from "react";
import {filterType} from "./types.ts";

interface Props {
    setFilter: React.Dispatch<React.SetStateAction<filterType>>,
    filter:filterType
}
const FiltersTodo = ({setFilter,filter}:Props) => {
    return (
        <div className='flex gap-2'>
             <span className={`p-2 rounded cursor-pointer ${filter===filterType.isDone&&'bg-blue-400'}`} onClick={()=>setFilter(filterType.isDone)}>done</span>
             <span className={`p-2 rounded cursor-pointer ${filter===filterType.isNotDone&&'bg-blue-400'}`} onClick={()=>setFilter(filterType.isNotDone)}>is not done</span>
             <span className={`p-2 rounded cursor-pointer ${filter===filterType.all&&'bg-blue-400'}`} onClick={()=>setFilter(filterType.all)}>all</span>
        </div>
    );
};

export default FiltersTodo;