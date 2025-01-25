import React from 'react'
import Resources from '@/components/resources/Resources'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer';
import BgGradientBlob from '@/components/BgGradientBlob';

function page() {
  return (
    <main>
        <NavBar/>
        <div className='sm:px-12 md:px-20 flex flex-col justify-center items-center gap-8 md:pt-16 md:gap-16'>
          <h1 className='text-4xl md:text-5xl pt-[68px]'>
            <span className='font-semibold bg-gradient-to-r from-[#FF8FF2] to-[#71A7FF] bg-clip-text text-transparent'> Resources
            </span>
          </h1>
          <p className='text-center sm:max-w-lg md:max-w-2xl lg:max-w-4xl sm:px-0 px-4'>Whether you are seeking light-hearted engagement through simple, enjoyable activities or require more serious clinical assistance, a vast array of resources are gathered here to support you throughout your mental health journey.</p>
          <Resources/>
        </div>
        <Footer/>
    </main>
  )
}

export default page