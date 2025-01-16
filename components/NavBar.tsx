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
        <div className='flex justify-between items-center p-4'>
          <div className=' h-[60px] flex'>
            <Link href="/" className='flex flex-1'>
              <Smile className="flex-1 text-white" />
            </Link>
          </div>
          <div className='flex gap-8'>
            <div className='text-md sm:text-3xl'>
              <Link href="/resources">
                resources
              </Link>
            </div>
            <div className='text-md sm:text-3xl '>
              <Link href="/events">
                events
              </Link>
            </div>
            <div className='text-md sm:text-3xl '>
              <Link href="/about">
                about
              </Link>
            </div>
          </div>
        </div>
        
    </motion.nav>
  )
}

export default NavBar