'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import Image from 'next/image';
import ExampleIcon from '../public/smile.svg';
import Footer from '@/components/Footer';
import BgGradientBlob from '@/components/BgGradientBlob';


export default function Home() {
  return (
    <>
    <main className='h-screen'>
        <NavBar/>
        <div className='pt-[68px] sm:px-12 md:px-20'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl'>
            <span className='bg-gradient-to-r from-[#FF8FF2] to-[#71A7FF] bg-clip-text text-transparent'> Resources
            </span>
          </h1>
          <p className=' text-base sm:text-2xl max-w-7xl'>Whether youre seeking light-hearted engagement through simple, enjoyable activities or require more serious clinical assistance, a vast array of resources are gathered here to support you throughout your mental health journey.</p>
          <div className='border relative h-[200vh]'>
            <div className='sticky h-screen inset-0 border'>
              <BgGradientBlob/>
            </div>
            <div className=' border absolute inset-0'>
              <p>cards</p>
            </div>
          </div>
        </div>
        <Footer/>
    </main>
    </>
  );
}
