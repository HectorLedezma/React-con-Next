'use client'
import { usePathname } from "next/navigation";

import './styles/colors.css';

import Logo from './resources/logo.webp';
import Image from "next/image";

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
      <header className="secondary-bg absolute inset-x-0 top-0 p-4">
        <Image className="rounded-full" src={Logo} alt="Site-image" width={100} height={100}/>
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
