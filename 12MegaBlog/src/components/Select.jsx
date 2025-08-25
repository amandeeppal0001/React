import React, {useId} from "react";

function Select({
    options,
    label,
    className,
    ...props // spreading all the props
}, ref){
    const id = useId()
    return(
        <div className="w-full">
            {label && <label htmlFor={id} className=""></label>}

            <select 
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white 
                text-black outline-none
                 focus:bg-gray-50 duration-200
                  border-gray-200 w-full
                  ${className}`}>
              {/* ${((className) == null)? className="" : className=className } `} > here is an problem in classname in this line verify from github */}

              {options?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
              ))}  {/*  opotions hamesha array  ya kuch nhi return    krega */}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)



