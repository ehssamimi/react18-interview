import {useState} from "react";
import {filterType, Todo} from "../../todo/types.ts";
import {AppDispatch} from "../../store/store.ts";
import {addTodoState, deleteTodoState, editTodoState, toggleTodo} from "../../store/todoSlice.ts";
import CreateTodo from "../../todo/CreateTodo.tsx";
import FiltersTodo from "../../todo/FiltersTodo.tsx";
import TodoListShow from "../../todo/TodoListShow.tsx";
import {useDispatch} from 'react-redux'
 function TodoBase() {
    const [filter,setFilter]=useState<filterType>(filterType.all)
    const dispatch=useDispatch<AppDispatch>()

    const addTodo=(todo:Todo)=>{
        dispatch(addTodoState(todo))
    }
    const deleteTask=(id:Date)=>{
        dispatch(deleteTodoState( id ))
    }
    const editTask=(id:Date,text:string)=>{
        dispatch(editTodoState({id,text}))
    }

    const isdone=(id:Date)=>{
        dispatch(toggleTodo(id))
    }

    return (
        <>
            <CreateTodo addTodo={addTodo}/>
            <FiltersTodo setFilter={setFilter} filter={filter}/>
            <TodoListShow   isdone={isdone} deleteTask={deleteTask}  filter={filter} editTask={editTask} />
        </>
    )
}

export default TodoBase