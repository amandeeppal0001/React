import React from "react";

// function Card(props){
function Card({username, btnText="visit us"}){
            // console.log(props); 
            // console.log(props.username); 
            console.log(username); 

    return(
        
         <div className="max-w-xs p-6 mb-3 rounded-md shadow-md bg-black">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinA2sqt0LPEvrxC6Mbpn5qnIEKS1wB58Y8A&s"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-50"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl text-gray-300 font-semibold tracking-wide">{btnText }</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card