import React, {useState} from 'react';
import {Todo} from "./types.ts";
interface props {
    todo:Todo,
    editTask:(id:Date,text:string)=>void,
    closeEdit: React.Dispatch<React.SetStateAction<boolean>>

}
const EachTaskInput = ({todo,editTask,closeEdit}:props) => {
    const [inputValue,setinputValue]=useState<string>(todo.title)
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinputValue(e.target.value)
    }
    const submit =(e:React.FormEvent)=>{
        e.preventDefault();
        if (inputValue!==''){
            editTask(todo.id,inputValue);
            closeEdit(false)
        }

    }
    return (
        <form className='flex' onSubmit={submit}>
            <input type="text" value={inputValue} onChange={changeInput}/>
            <button onClick={submit} className={'p-2 border-y-green-600'}>submit</button>
        </form>
    );
};

export default EachTaskInput;