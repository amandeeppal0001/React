import React from "react";

function Button({
    children,
    type= 'button',
    bgColor= 'bg-blue-600',
    textColor = 'texr-white',
    className ='',
    ...props // jitni bhi properties di hai vo sari humne le li spread kerke props ko 

}){
    return(
        <button   className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
           {children} {/*  // we can also say it buttonText */}
        </button>
    )
}

export default Button