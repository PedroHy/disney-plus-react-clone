import React from "react";

import MovieCard from "../components/MovieCard";

import { useSelector } from "react-redux";

export default function Catalog(){
    
    const movies = useSelector((state)=>{
        return state.movies
    })
    
    return(
        <div className="Catalog">
            <h1 className="text-4xl font-bold text-center my-6">Catálogo</h1>
            <div className="movies flex flex-wrap justify-center gap-6 w-full mt-12">
                {
                    movies.map(movie=>{
                        return(
                            <div key={movie.id} className="movie relative min-w-11/12 inline-block shadow-xl shadow-black">
                                <MovieCard movie={movie}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}