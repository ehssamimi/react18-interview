import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Todo} from "../todo/types.ts";
// import type { RootState } from '../../app/store'

// Define a type for the slice state


// Define the initial state using that type
const initialState: Todo[] = []

export const todoSlice = createSlice({
    name: 'todo',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        // Use the PayloadAction type to declare the contents of `action.payload`
        addTodoState: (state, action: PayloadAction<Todo>) => {
           state.push(action.payload)
        },
        editTodoState: (state, action: PayloadAction<{ id:Date,text:string }>) => {
            const {id,text}=action.payload
            return state.map(todo => todo.id === id ? { ...todo, title: text } : todo)
        },
        deleteTodoState: (state, action: PayloadAction<Date>) => {
             return state.filter(item=>item.id!==action.payload )
        },
        toggleTodo:(state, action: PayloadAction<Date>)=>{
            return state.map(item=>item.id===action.payload?{...item,done:!item.done}:item)
        }
    },
})

export const { addTodoState,editTodoState,deleteTodoState,toggleTodo } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default todoSlice.reducer