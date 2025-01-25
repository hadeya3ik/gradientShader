'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import Image from 'next/image';
import ExampleIcon from '../public/smile.svg';
import Footer from '@/components/Footer';
import BgGradientBlob from '@/components/BgGradientBlob';
import GradientBlob from '@/components/GradientBlob';

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className='h-screen flex items-center justify-center'>
      <div className="absolute inset-0">
        <GradientBlob />
      </div>
      <div className='w-full flex flex-col items-center text-xl sm:text-2xl md:text-3xl gap-24 relative z-10'>
        <p>Stay Tunes for Future Events!</p>
      </div>
      </main> 
    <Footer/>
    </>
  );
}
