import React from "react";

import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";


export default function Originals(){

    const movies = useSelector((state)=>{
        return state.movies
    })

    const disneyMovies = movies.filter((movie)=>{
        if(movie.categories[0] === "82a1e857-5ccf-4a6d-88a6-83c36dc6812c"){
            return movie
        }
    })

    return(
        <div className="Originals">
             <h1 className="text-4xl font-bold text-center my-6">Originais</h1>
             <div className="movies flex flex-wrap justify-center gap-6 w-full mt-12">
                {
                    disneyMovies.slice(4, 50).map(movie=>{
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