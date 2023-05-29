import React from 'react';
import Slider from 'react-slick';

import '../source/slider/slider.css'
import '../source/slider/slick.css'

export default function BannersCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {props.banners.map(banner=>{
        return(
            <div key={banner.id} className="banner relative w-11/12 inline-block border-none">
                   <img key={banner.imageTitle} className='absolute top-0 select-none w-full h-44 object-contain md:h-auto lg:h-auto' src={`source${banner.imageTitle}`} alt={banner.slug}/>
                  <img key={banner.imageCover} className='rounded w-full h-44 object-cover md:h-auto lg:h-auto' src= {`source${banner.imageCover}`} alt={banner.slug}/>
            </div>
           )
        })}
    </Slider>
  );
}

