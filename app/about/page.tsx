'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import Image from 'next/image';
import ExampleIcon from '../public/smile.svg';
import Join from '@/components/home/Join';
import Faq from '@/components/home/Faq';


const Scene = dynamic(() => import("@/components/Scene"), {
  loading : () => <p></p>,
  ssr :false
},);

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="relative h-screen w-screen">
      <div className='shader h-screen w-screen '>
        abotu
      </div>

    </main></>
  );
}
