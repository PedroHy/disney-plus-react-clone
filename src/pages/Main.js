import React from "react";
import DisneyLogo from '../source/assets/imgs/categories/disney.png'
import PixarLogo from '../source/assets/imgs/categories/pixar.png'
import MarvelLogo from '../source/assets/imgs/categories/marvel.png'
import StarWarsLogo from '../source/assets/imgs/categories/star-wars.png'
import NationalLogo from '../source/assets/imgs/categories/national-geographic.png'

import MovieSlide from "../components/MovieSlide";
import BannersCarousel from "../components/BannersCarousel";
import Categories from "../components/Categories";


import { useSelector } from "react-redux";


export default function Main(){

    const banners = useSelector((state)=>{
        return state.banners
    })

    const movies = useSelector((state)=>{
        return state.movies
    })

    const disneyMovies = movies.filter((movie)=>{
        if(movie.categories[0] === "82a1e857-5ccf-4a6d-88a6-83c36dc6812c"){
            return movie
        }
    })

    const pixarMovies = movies.filter((movie)=>{
        if(movie.categories[0] === "7a11d2cc-0ea2-4fb9-bee9-bfcb9e7104bb"){
            return movie
        }
    })

    const marvelMovies = movies.filter((movie)=>{
        if(movie.categories[0] === "99a64432-90bb-4f5a-8452-1ae128504bb2"){
            return movie
        }
    })

    const starWarsMovies = movies.filter((movie)=>{
        if(movie.categories[0] === "1aba57cf-2149-4ce1-866c-ca2a5d7ab868"){
            return movie
        }
    })

    return(
        <div className="Main">
            <div className='banners mt-12 w-full overflow-hidden'>
                <div className="carrousel relative whitespace-nowrap pb-8 w-11/12 m-auto ">
                    <BannersCarousel banners={banners}></BannersCarousel>
                </div>
            </div>  

            <div className='categories flex gap-1 md:gap-6 lg:gap-6 mx-auto justify-center w-11/12 px-2'>
                <Categories img={DisneyLogo} path="/source\assets\videos\category-disney.mp4"/>
                <Categories img={MarvelLogo} path="/source\assets\videos\category-marvel.mp4"/>
                <Categories img={PixarLogo} path="/source\assets\videos\category-pixar.mp4"/>
                <Categories img={StarWarsLogo} path="/source\assets\videos\category-star-wars.mp4"/>
                <Categories img={NationalLogo} path="/source\assets\videos\category-national-geographic.mp4"/>
            </div>

            <MovieSlide movies={disneyMovies} screen={window.innerWidth} title="Os Melhores Da Disney"></MovieSlide>
            <MovieSlide movies={marvelMovies} screen={window.innerWidth} title="Para Os Marvetes"></MovieSlide>
            <MovieSlide movies={pixarMovies} screen={window.innerWidth} title="Pixar"></MovieSlide>
            <MovieSlide movies={starWarsMovies} screen={window.innerWidth} title="Uma Aventura Pelas Estrelas"></MovieSlide>

            
        </div>
    )
}