import React from 'react'
import WaveGradient from '@/images/waveGradient.svg'

//  flex gap-8 flex-col max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-4xl sm:px-0 px-4

function About() {
  return (
    <div className='flex flex-col'>
        <div className='text-xl sm:text-2xl md:text-3xl pt-[64px] '>
          <div className='relative top-18 sm:top-12 flex justify-center w-full'>
            <p className='font-semibold self-center item text-xl sm:text-2xl md:text-3xl px-20 max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-4xl'>Supporting Students to Manage Life and Mental Health Challenges @ the University of Waterloo.</p>
          </div>
            <div className='w-full'>
              <WaveGradient/>
            </div>
        </div>
       

    </div>
  )
}

export default About