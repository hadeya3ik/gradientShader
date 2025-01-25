'use client'
import React, {useState, useEffect} from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import Link from 'next/link';
import Smile from '@/images/Vector.svg';

function NavBar() {
  const [hiddenNav, setHiddenNav] = useState(false);
  const [previousScrollYProgress, setPreviousScrollYProgress] = useState(0);
  const {scrollYProgress} = useScroll();

  useEffect(() => {

    scrollYProgress.on("change", e => console.log(e))},[]); 

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const previous = previousScrollYProgress;
        if (latest > previous ) {
          setHiddenNav(true)
        } else {
            setHiddenNav(false)
        }
        setPreviousScrollYProgress(latest);
      });

  return (
    <motion.nav 
        className='absolute top-0 w-full z-[1000]'
        variants={{
            visible: { y: 0},
            hidden: {y: "-100%"}
        }}
        animate={hiddenNav ? "hidden" : "visible"}
        transition={{duration:0.35, ease:"easeInOut"}}
        >
        <div className='p-2 md:p-4 flex justify-between items-top'>
          <div className=' lg:h-[60px] md:h-[50px] h-[40px] flex'>
            <Link href="/" className='flex flex-1'>
              <Smile className="flex-1 text-white" />
            </Link>
          </div>
          <div className='flex md:gap-8 gap-4 text-lg sm:text-2xl md:text-3xl'>
            <div className=''>
              <Link href="/resources">
                Resources
              </Link>
            </div>
            <div className=''>
              <Link href="/events">
                Events
              </Link>
            </div>
            <div className=''>
              <Link href="/about">
                About
              </Link>
            </div>
          </div>
        </div>
        
    </motion.nav>
  )
}

export default NavBar