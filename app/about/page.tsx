'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import Image from 'next/image';
import ExampleIcon from '../public/smile.svg';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="relative h-screen w-screen pt-[68px] ">
      <div className='shader h-screen w-screen '>
        abotu
      </div>
    </main>
    <Footer/>
    </>
  );
}
