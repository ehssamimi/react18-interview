import React, { useState, useEffect } from "react";
import axios from "axios";


interface GithubUserProps{
    username:string,


}




export default function GithubUserUsage() {
    return (
        <GithubUser username="ryanflorence" >
            {(user) => (
                <div>
                    <img className="avatar" src={user.avatar_url} alt="github-user" />
                </div>
            )}
        </GithubUser>
    );
}

const GithubUser: React.FC<GithubUserProps> = ({ username,children  }) => {
    const [user, setUser] = useState({});
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const Nuser=await getUser(username);
                setUser(Nuser)
            }catch (e){
                console.log(e)
            }
        }
        fetchData()

        // const Nuser=getUser(username);
        // setUser(Nuser)
    },[])


    if (!user) return "noting";
    // return "not implemented";
    return  children(user)

};


// Service
  function getUser(username:string) {
    return   axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => response.data);
}
