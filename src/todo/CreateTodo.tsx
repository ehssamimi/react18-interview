import React, {useState} from 'react';
import {Todo} from "./types.ts";

interface Props{
    addTodo:(todo:Todo)=>void
}
const CreateTodo = ({addTodo}:Props) => {
    const [input ,setInput ]=useState<string>('')
    const handelSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        const newTodo:Todo={
            title:input,
            id:new Date(),
            done:false
        }
        setInput('')
        addTodo(newTodo)

    }

    return (
        <div>
            <p className='text-left my-5 text-4xl'>create List </p>
            <form className='flex gap-2 items-center ' onSubmit={handelSubmit }>


                <input type="text" className='h-10 w-44 rounded   outline-none px-2' value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}/>
                <button className='p-2 rounded bg-green-400 ' type='submit' >submit </button>
            </form>
        </div>

    );
};

export default CreateTodo;