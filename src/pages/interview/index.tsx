import EventLoop from "../../components/interview/EventLoop.tsx";
import mutable from "../../components/interview/mutable.tsx";
import Closure from "../../components/interview/Clouser.tsx";
import {  useEffect, } from "react";
import GithubUserUsage from "../../components/interview/RenderProps.tsx";

const Index = () => {

    useEffect(()=>{
        EventLoop()
        Closure()
        mutable()

        const a={ali:2}
        const b=a;
        const c=a;
        console.log(b)
        console.log(b===c)
    },[])






    return (
        <div  >
            interview
            <GithubUserUsage/>
        </div>
    );
};

export default Index;