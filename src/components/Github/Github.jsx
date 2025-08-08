import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";
useLoaderData
export default function Github(){
//    const [data, setData] = useState([])
    // useEffect(()=>{
    //         // fetch('https://api.github.com/users/hiteshchoudhary')
    //         fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json)
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         } )
    // },[])

    const data = useLoaderData()

    return(
        <div className="bg-gray-700 p-4 m-4 text-white text-center">Github Followers: {data.followers} 
            <img src={data.avatar_url} alt="Github picture" width={300}/>
                </div>
    )
}


export const githubInfoLoader = async ()=>{

const response = await fetch('https://api.github.com/users/hiteshchoudhary')

return response.json()
}

