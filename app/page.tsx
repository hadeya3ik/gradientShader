'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image';
import ExampleIcon from '../public/smile.svg';

const Scene = dynamic(() => import("@/components/Scene"), {
  loading : () => <p></p>,
  ssr :false
},);

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <div className='shader h-screen w-screen '>
        <Scene />
      </div>
      <div id="box" className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full flex justify-center items-center">
        {/* <ExampleIcon className="p-36 text-blue-500" /> */}

      </div>
    </main>
  );
}
