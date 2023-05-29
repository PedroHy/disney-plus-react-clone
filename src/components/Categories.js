import React from "react";

export default function Categories(props){

    if(window.screen){
        return(
            <div className="group categorie rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 shadow-2xl shadow-black border-2 border-gray-600 relative w-1/5 mb-8">
                <video loop muted autoPlay className="rounded-xl w-full invisible group-hover:visible">
                   <source src={props.path} type="video/mp4"/>
                </video>
                <img src={props.img} alt="logos" className="absolute top-0 min-w-96"></img>
            </div>
        )
    }else{
        return(
            <div className="group categorie rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 shadow-2xl shadow-black border-2 border-gray-600 relative w-1/5 mb-8 ">
                <img src={props.img} alt="logos"></img>
            </div>
        )
    }

}