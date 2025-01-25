'use client'
import React, {ReactNode, useState} from 'react'
import GradientBlob from '../GradientBlob'
import { div } from 'framer-motion/client'
import Joyi from '@/images/Resources/Joyi.svg'
import Physc2Go from '@/images/Resources/Phsyc2Go.svg'
import Finch from '@/images/Resources/Finch.svg'
import MM from '@/images/Resources/MotivationMadness.svg'
import Smile from '@/images/Vector.svg';

function SelectedJoys() {
    return ( 
        <main className=' flex flex-col gap-4'>
            <div className='relative flex justify-center items-center min-h-screen'>
                <div className="absolute inset-0 ">
                    <GradientBlob />
                </div>
                <div className='w-full flex flex-col items-center gap-8 md:gap-16 relative z-10'>
                    <div className="font-semibold text-center text-4xl md:text-5xl w-full">
                        <h1>Selected Joys</h1>
                    </div>
                    <div className='flex md:flex-row flex-col gap-8'>
                        <div className='flex flex-row gap-8'>
                            <P2GCard />
                            <JoyiCard />
                        </div>
                        <div className='flex flex-row gap-8'>
                            <FinchCard />
                            <MMCard />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function MMCard() {
    return ( 
    <div className='flex flex-col items-center gap-2'>
        <a href="https://www.youtube.com/@MotivationMadness/featured" target="_blank" rel="noopener noreferrer">
            <div className='bg-[#858585] p-4 bg-opacity-25 backdrop-blur-2xl rounded-3xl flex flex-col items-center'>
                <h3>Motivation Madness</h3>
                <div className='p-8'>
                    <MM className="w-16 h-16" /> 
                </div>
            </div>
        </a>
        <p className='text-sm text-center max-w-36'>Motivating and inspirational videos.</p>
    </div>
)
}

function JoyiCard() {
    return ( 
    <div className='flex flex-col items-center gap-2'>
        <a href="https://colorful.zone/Joyi/" target="_blank" rel="noopener noreferrer">
        <div className='bg-[#858585] p-4 bg-opacity-25 backdrop-blur-2xl rounded-3xl flex flex-col items-center'>
            <h3>Joyi</h3>
            <div className='p-8'>
                <Joyi className="w-16 h-16" /> 
            </div>
        </div>
        </a>
        <p className='text-sm text-center max-w-36'>A unique personalized mental health app. </p>
    </div>
)
}

function P2GCard() {
    return ( 
    <div className='flex flex-col items-center gap-2'>
        <a href="https://www.youtube.com/@Psych2go/featured" target="_blank" rel="noopener noreferrer">
        <div className='bg-[#858585] p-4 bg-opacity-25 backdrop-blur-2xl rounded-3xl flex flex-col items-center'>
            <h3>Pysch2Go</h3>
            <div className='p-8'>
                <Physc2Go className="w-16 h-16" /> 
            </div>
        </div>
        </a>
        <p className='text-sm text-center max-w-36'>Videos simplifying psychology topics.</p>
    </div>
)
}

function FinchCard() {
    return ( 
    <div className='flex flex-col items-center gap-2'>
        <a href="https://finchcare.com/" target="_blank" rel="noopener noreferrer">
        <div className='bg-[#858585] p-4 bg-opacity-25 backdrop-blur-2xl rounded-3xl flex flex-col items-center'>
            <h3>Finch</h3>
            <div className='p-8'>
                <Finch className="w-16 h-16" /> 
            </div>
        </div>
        </a>
        <p className='text-sm text-center max-w-36'>A self-care pet game mental health app.</p>
    </div>
)
}

export default SelectedJoys