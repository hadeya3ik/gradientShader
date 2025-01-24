'use client';

import NavBar from '@/components/NavBar'
import React from 'react'
import dynamic from 'next/dynamic'
import Faq from '@/components/home/Faq';
import Join from '@/components/home/Join';
import Footer from '@/components/Footer';
import SelectedJoys from '@/components/home/SelectedJoys';
import About from '@/components/home/About';
import LetSmileTogether from '@/images/LetsSmileTogether.svg'

const Scene = dynamic(() => import("@/components/Scene"), {
  loading: () => <div>Loading...</div>, // Customize this fallback
  ssr: false, 
});

export default function Home() {
  return (
    <> 
    <NavBar/>
    <main className="relative h-screen w-screen">
      <div className='shader h-screen w-screen'>
        <Scene />
        <div className='absolute h-screen w-screen flex justify-center items-center top-0'>
          <LetSmileTogether className='w-[80%] h-[70%]'/>
        </div>
      </div>
      <div>

      </div>
      <div id="box" className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full flex justify-center items-center">
      </div>
    </main>
    <About/>
    <Faq />
    <SelectedJoys />
    <Join />
    <Footer />
    </>
  );
}