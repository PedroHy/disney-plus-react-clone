import React from "react";

import { useSelector } from "react-redux";

export default function List(){
    const list = useSelector(state=>{
        return state.list
    })    
    
    if(list > 0){
        return(
            <div className="List">
                <h1 className="text-4xl font-bold text-center my-6">Lista</h1>      
            </div>
        )
    }else{
        return(
            <div className="List">
                <h1 className="text-4xl font-bold text-center my-6">Lista</h1>
                <div className="my-56">   
                    <span className="text-4xl text-center text-zinc-200 block p-8">Sua Lista está vazia</span>
                </div>
            </div>
        )
    }
    
}