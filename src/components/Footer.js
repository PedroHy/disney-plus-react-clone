import React from "react";
import logo from '../source/assets/imgs/logo.svg'


export default function Footer(){
    return(
        <footer  className='w-full h-64 bg-gray-950 flex flex-col justify-center align-center'>
          <img src={logo} alt='logo-disney' className='w-20 block mx-auto'></img>
          <p className='w-80 text-xs text-center mx-auto mt-2'>Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20</p>
        </footer>
    )
}