import React from "react";

export default function MovieCard(props){
    return(
        <div className="MovieCard">
            <img key={props.movie.slug} className='rounded border-box ease-in hover:scale-105 border-zinc-400 hover:border-2 h-24 md:h-auto lg:h-auto' src= {`source${props.movie.imageCover}`} alt={props.movie.slug}/>
        </div>
    )
}