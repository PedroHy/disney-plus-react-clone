import React from "react";

import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";


export default function Search(){

    const movies = useSelector((state)=>{
        return state.movies
    })

    return(
        <div className="Search">
            <input type="text" placeholder="Titulo, personagem ou gênero" className="w-full py-8 md: text-2xl lg:text-4xl text-center font-bold bg-gradient-to-b from-zinc-800 to-gray-700 block"/>
            
            <div className="movies flex flex-wrap justify-center gap-6 w-full mt-12">
                {
                    movies.slice(0, 20).map(movie=>{
                        return(
                            <div key={movie.id} className="movie relative inline-block shadow-xl shadow-black">
                                <MovieCard movie={movie}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}