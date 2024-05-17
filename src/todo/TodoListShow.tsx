import {filterType, Todo} from "./types.ts";
import {useState} from "react";
import EachTaskInput from "./EachTaskInput.tsx";
import {useSelector} from 'react-redux'
import {RootState} from "../store/store.ts";

interface Props{
    isdone:(id:Date)=>void,
    deleteTask:(id:Date)=>void,
    editTask:(id:Date,text:string)=>void,
    filter:filterType
}

const TodoListShow = ({isdone,deleteTask,filter,editTask}:Props) => {
    const [isEdit,setEdit]=useState<boolean>(false)
    const todoList=useSelector((store:RootState) =>store.todo)
    return (
        <div>
            <p className='text-left my-5 text-4xl'>TodList </p>
            {
                todoList.filter((todo:Todo)=>filter===filterType.isDone?todo.done:filter===filterType.isNotDone?!todo.done:todo).map((todo:Todo)=><div className='flex gap-2 mb-2 items-center'>
                        {
                            isEdit? <EachTaskInput todo={todo} editTask={editTask} closeEdit={setEdit}/>:

                                <div className='flex gap-2' >
                                    <p  onClick={()=>isdone(todo.id)}  className={[todo.done?'line-through':'no-underline','text-left'].join(' ')}>
                                        {todo.title}
                                    </p>
                                    <span className='text-amber-800' onClick={()=>deleteTask(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-14 0m2 0a1 1 0 00-1 1v11a2 2 0 002 2h10a2 2 0 002-2V10a1 1 0 00-1-1m-3 0V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                        </svg>
                    </span>
                                    <span className='text-amber-400' onClick={()=>setEdit(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path d="M3,17.25V21h3.75L17.81,9.94l-3.75-3.75L3,17.25z M20.71,7.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34
                            c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75L20.71,7.04z"/>
                        </svg>
                             </span>
                                </div>
                        }

                    </div>
                )
            }

        </div>
    );
};

export default TodoListShow;