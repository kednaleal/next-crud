import Titulo  from "./Titulo";
import React from 'react'

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}>
            <Titulo>{props.titulo}</Titulo>
            
        </div>
    )
}