'use client'
import React, {useState, useEffect} from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import Link from 'next/link';

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
        className='sticky top-0 w-full px-8 z-[1000]'
        variants={{
            visible: { y: 0},
            hidden: {y: "-100%"}
        }}
        animate={hiddenNav ? "hidden" : "visible"}
        transition={{duration:0.35, ease:"easeInOut"}}
        >
        <div className='pt-4 flex justify-between'>
          <div className='w-min px-4 pb-1 rounded-full bg-primary text-2xl sm:text-5xl border-2 sm:border-4 border-black'>
            <Link href="/">
              smile
            </Link>
          </div>
          <div className='flex gap-2'>
            <div className='w-min px-4 pb-1 rounded-full  bg-[#ddbfff] text-2xl sm:text-5xl border-2 sm:border-4 border-black'>
              <Link href="/resources">
                resources
              </Link>
            </div>
            <div className='w-min px-4 pb-1 rounded-full bg-[#c3f2a2] text-2xl sm:text-5xl border-2 sm:border-4 border-black'>
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