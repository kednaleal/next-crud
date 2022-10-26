import React from 'react'
export default function Titulo(props){
   
    return(
        <div className="flex flex-col justify-center">
            <h1 className="pl-7 py-2">
                {props.children}
            </h1>
            <hr/>
        </div>
    )
}