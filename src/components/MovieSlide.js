import React from "react";
import MovieCard from "./MovieCard";
import Slider from 'react-slick';

export default function MovieSlide(props){
    let slides = 5
    if(props.screen < 768){
        slides = 2
    }else if(props.screen == 768 && props.screen < 1024){
        slides = 4
    }
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 2
      };

      
    return(
        <div className="w-full overflow-hidden">
            <div className='cards w-11/12 m-auto px-2'>

                <h3 className="title text-2xl pb-2 text-bold font-bold">{props.title}</h3>
                <div className="movies relative whitespace-nowrap pb-8">
                <Slider {...settings}>
                    {
                        props.movies.slice(0, 15).map(movie=>{
                        return(
                            <div key={movie.id} className="movie relative inline-block mr-6 ">
                                <MovieCard movie={movie}/>
                            </div>
                        )})
                    }
                </Slider>
                </div>
            </div>
        </div>
    )
}