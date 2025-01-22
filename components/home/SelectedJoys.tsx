'use client'
import React, {ReactNode, useState} from 'react'
import GradientBlob from '../GradientBlob'
import { div } from 'framer-motion/client'
import Joyi from '@/images/Resources/Joyi.svg'
import Smile from '@/images/Vector.svg';

function SelectedJoys() {
    return ( 
        <main className='py-20 flex flex-col gap-4'>
            <div className='relative flex justify-center items-center min-h-screen'>
                <div className="absolute inset-0 ">
                    <GradientBlob />
                </div>
                <div className='w-full flex flex-col items-center gap-24 relative z-10'>
                    <div className="text-center text-4xl sm:text-5xl md:text-7xl w-full">
                        <h1>Selected Joys</h1>
                    </div>
                    <div className='flex md:flex-row flex-col gap-8'>
                        <div className='flex flex-row gap-8'>
                            <Card />
                            <Card />
                        </div>
                        <div className='flex flex-row gap-8'>
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function Card() {
    return ( <div className='bg-[#858585] bg-opacity-25 backdrop-blur-2xl p-12 rounded-3xl'>
        <Joyi className="w-32 h-32" /> 
    </div>)
}

export default SelectedJoys