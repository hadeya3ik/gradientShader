'use client'
import Link from 'next/link';
import FloorGradient from '@/images/FloorGradient.svg'
import { FaInstagram ,FaDiscord } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="relative">
        <div className="relative z-100 w-full h-full">
          <FloorGradient />
        </div>
        <div className="absolute z-10 pb-1 p-2 md:p-4 bottom-0 flex w-full items-end justify-between ">
          <p className='text-xs sm:text-sm '>© 2025 Waterloo Smile Club</p>
          <div className='flex gap-4'>
            <a
              href="https://www.instagram.com/uwsmileclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FaInstagram className='w-[24px] h-[24px]' />
            </a>
            <a
              href="https://discord.com/invite/QrHaD6FCjn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FaDiscord className='w-[24px] h-[24px]'/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer