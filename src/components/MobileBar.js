import React from "react";
import logo from '../source/assets/imgs/logo.svg'

import { Link } from "react-router-dom";

export default function MobileBar(){
    return(
        <div className='fixed bottom-0 w-full bg-gradient-to-b from-zinc-950 to-gray-900 h-16 flex justify-center text-2xl md:hidden lg:hidden'>
            <nav className='flex gap-10 ml-6 font-bold'>
                <Link to='/' className='group flex gap-2 items-center'><i className="ph-fill ph-house"></i></Link>
                <Link to='/search' className='group flex gap-2 items-center'> <i className="ph-bold ph-magnifying-glass"></i></Link>
                <Link to='/list' className='group flex gap-2 items-center'> <i className="ph-bold ph-plus "></i></Link>
                <Link to='/originals' className='group flex gap-2 items-center'> <i className="ph-fill ph-star "></i> </Link>
                <Link to='/catalog' className='group flex gap-2 items-center'> <i className="ph-fill ph-film-reel "></i></Link>
            </nav> 
        </div>
    )
}