import React from "react";

function Container({children}){  // in container we add all stylinging like height & width , container is a box which accepts props as a children
 return  <div className="w-full max-w-7xl mx-auto px-4">
    {children}</div>; // don't need () after return if we return in single line  & we are using  ; to end that single line
 
}

export default Container