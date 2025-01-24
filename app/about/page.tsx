'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import Image from 'next/image';
import ExampleIcon from '../public/smile.svg';
import Footer from '@/components/Footer';
import SmileGradient from '@/images/SmileGradient.svg'


export default function Home() {
  return (
    <>
    <NavBar/>
    <main className=" w-screen pt-[68px] ">
      <div className=' w-screen flex flex-col items-center'>
        <div className='flex flex-col items-center w-min'>
          <h1 className="flex-1 px-8 text-5xl">About</h1>
            <SmileGradient className='' />
        </div>
        <div>
          <div>
            <h1 className='text-xl sm:text-3xl md:text-4xl'>
              <span className='bg-gradient-to-r from-[#FFB472] to-[#FF7AB1] bg-clip-text text-transparent'> Our Mission
              </span>
            </h1>
            <p>At SMILE (Students for Mental Health and Inner Life Enrichment), our mission is to create a vibrant and inclusive community that promotes general well-being and supports students facing life's challenges.</p>
            <p>We aim to be a ray of sunshine, offering easy access to resources that enhance mental health and enrich the inner lives of students. Through our club, we strive to foster a supportive and uplifting environment where students can find solace, share smiles, and embrace their academic journey with joy.</p>
          </div>
          <div>
            <h1 className='text-xl sm:text-3xl md:text-4xl'>
              <span className='bg-gradient-to-r from-[#FF8FF2] to-[#71A7FF] bg-clip-text text-transparent'> Our Vision
              </span>
            </h1>
            <p>Our vision is to create a transformative community that radiates positivity and spreads smiles across the University of Waterloo. Every student deserves to experience a fulfilling and joyful university life. </p>
            <p>By connecting students to available mental health resources, promoting mental and emotional well-being, and organizing engaging events, we aim to empower students and inspire them to find their reasons to SMILE.</p>
          </div>
          <div>
            <h1 className='text-xl sm:text-3xl md:text-4xl'>
              <span className='bg-gradient-to-r from-[#69C887] to-[#6D95DA] bg-clip-text text-transparent'> Our Story
              </span>
            </h1>
            <p>We are students who have personally encountered the ups and downs of university life and understand the importance of support and connection. Driven by our own experiences, we established the SMILE Club to provide a warm and friendly community for students to lean on, laugh with, and share in the journey of personal growth.</p>
            <p>We are committed to making a positive impact on the lives of students, helping them to find reasons to smile, and creating a brighter future together.</p>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
