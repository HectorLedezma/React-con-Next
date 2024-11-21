'use client'
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";

import './styles/colors.css';
import './styles/sizes.css';

import Logo from './resources/logo.webp';

import Image from "next/image";
import InputSearch from "./components/inputSearch";
import ButtonResponsive from "./components/buttonResp";

export default function Home() {
  const location = usePathname();

  return (
    <div 
      className="
        grid 
        grid-rows-[20px_1fr_20px] 
        items-center justify-items-center 
        min-h-screen p-8 pb-20 gap-16 sm:p-20 
        font-[family-name:var(--font-geist-sans)]
      "
    >
      <header 
        className="
          secondary-bg absolute 
          inset-x-0 top-0 p-4 flex 
          items-center 
          justify-between
        "
      >
        <div className="header-page items-center">
          <div className="flex items-center me-4">
            <Image className="rounded-full m-3" src={Logo} alt="Site-image" width={100} height={100}/>
            <div className="">
              <h1 className="Text-header font-semibold">Bienvenido a la CheemStore</h1>
              <h2 className="Sub-Text-header">Lo mejor de lo mejor</h2>
            </div>
          </div>
          <div className="p-4 items-center">
            <InputSearch className="full-width" placeholder=" Busca lo que mas te intersa"/>
          </div>
        </div>
        <div>
          <ButtonResponsive icon={<FaUser/>} text="Inicia sesión"/>
        </div>
      </header>
      <main 
        className="
          primary-bg 
          flex flex-col 
          gap-8 row-start-2 
          items-center sm:items-start
        "
      >
        
      </main>
      <footer className="secondary-bg row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h6>proyecto React-Next</h6>        
      </footer>
    </div>
  );
}
