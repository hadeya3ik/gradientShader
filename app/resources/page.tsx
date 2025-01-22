import React from 'react'
import Resources from '@/components/resources/Resources'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer';
import BgGradientBlob from '@/components/BgGradientBlob';

function page() {
  return (
    <main className=''>
        {/* <div className='fixed h-screen inset-0 border'>
          <BgGradientBlob/>
        </div> */}
        <NavBar/>
        <div className='pt-[68px] sm:px-12 md:px-20'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl'>
            <span className='bg-gradient-to-r from-[#FF8FF2] to-[#71A7FF] bg-clip-text text-transparent'> Resources
            </span>
          </h1>
          <p className=' text-base sm:text-2xl max-w-7xl'>Whether youre seeking light-hearted engagement through simple, enjoyable activities or require more serious clinical assistance, a vast array of resources are gathered here to support you throughout your mental health journey.</p>
          <Resources/>
        </div>
        <Footer/>
    </main>
  )
}

export default page