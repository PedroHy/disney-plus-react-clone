import React from "react";
import logo from '../source/assets/imgs/logo.svg'

import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className='flex items-center justify-between py-3 px-9'>
            <div className='flex mx-auto md:mx-0 lg:mx-0'>
            <div className='logo w-20'>
                <img src={logo} alt='logo-disney' className='w-full m-auto'></img>
            </div>
            <nav className='flex gap-10 ml-6 font-bold hidden md:flex lg:flex'>
                <Link to='/' className='group flex gap-2 items-center'> <i className="ph-fill ph-house "></i> <span className="group-hover:border-b-2 hidden lg:inline">INÍCIO</span></Link>
                <Link to='/search' className='group flex gap-2 items-center'> <i className="ph-bold ph-magnifying-glass"></i> <span className="group-hover:border-b-2 hidden lg:inline">PESQUISA</span></Link>
                <Link to='/list' className='group flex gap-2 items-center'> <i className="ph-bold ph-plus "></i> <span className="group-hover:border-b-2 hidden lg:inline">MINHA LISTA</span></Link>
                <Link to='/originals' className='group flex gap-2 items-center'> <i className="ph-fill ph-star "></i> <span className="group-hover:border-b-2 hidden lg:inline">ORIGINAIS</span></Link>
                <Link to='/catalog' className='group flex gap-2 items-center'> <i className="ph-fill ph-film-reel "></i> <span className="group-hover:border-b-2 hidden lg:inline">CATÁLOGO</span></Link>
            </nav>
            </div>
            <div className='perfil items-center gap-4 hidden md:flex lg:flex'>
            <span className=" hidden lg:inline">Pedro</span>
            <div className="bg-[url('https://www.leak.pt/wp-content/uploads/2020/03/iron-man-e1584893148574.jpg')] bg-cover bg-center h-12 w-12 rounded-full"></div>
            </div>
        </header>
    )
}