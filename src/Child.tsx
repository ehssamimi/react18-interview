// import { useState } from 'react'
import './App.css'
import React, {useEffect, useState} from "react";
interface ChildComponentProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}
function Child({count ,setCount}:ChildComponentProps ) {
  const [input, setInput] = useState<string>('')
    useEffect(()=>{
        console.log(count)
    },[count])
    const submit=(e:React.FormEvent)=>{
      e.preventDefault();
      if (input){
          setCount(prevCount=>prevCount+1)
      }
    }
    // const submit2=(e:React.ChangeEvent<HTMLInputElement>):void=>{
    //     e.preventDefault();
    //     if (input){
    //         setCount(prevCount=>prevCount+1)
    //     }
    // }


  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        {/*<button onClick={() => setCount((count) => count + 1)}>*/}
        {/*  count is {count}*/}
        {/*</button>*/}
          <form onSubmit={submit}>
              <div>
                  <input type='text' onChange={(e)=>setInput(e.target.value)}/>
                  <button type='submit'/>
              </div>
          </form>
        <p>
            count is {count}
        </p>
          <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
          </button>
      </div>

    </>
  )
}

export default Child
