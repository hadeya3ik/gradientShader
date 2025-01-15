'use client'
import React, {ReactNode, useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import SqaureArrow from '@/images/SquareArrow.svg'

function ResizablePanel({children} : {children : ReactNode}) {
    let [ref, { height }] = useMeasure();
  
    return (<motion.div
            animate={{ height }}
            className="overflow-hidden">
            <AnimatePresence>
                <motion.div 
                    ref={ref} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.05 } }}
                    exit={{ opacity: 0, transition: { duration: 0.05} }}
                    >
                    {children}
                </motion.div>
            </AnimatePresence>
        </motion.div>) 
}

function QA({q, a} : {q:string, a:string}) {
    const [expand, setExpand] = useState(false)
    return ( <div>
        <div className='cursor-pointer flex justify-between py-2 sm:py-4 border-t-2 sm:border-t-4 border-black' onClick={() => {setExpand(!expand)}}>
            <h1 className='text-xl sm:text-3xl md:text-5xl whitespace-nowrap'>{q}</h1>
            <div className='h-full w-[2rem] sm:w-[3rem]'  > 
                <SqaureArrow />
            </div>
        </div>
        <ResizablePanel>
        {expand && 
            <p className='text-base sm:text-2xl  pb-4'>
            {a}
            </p>}
        </ResizablePanel>
    </div>)
} 

const QAlist = [
    {q : "What is the Smile Club ?", 
    a : "The SMILE club is the go-to well-being and mental health club for the University of Waterloo students, providing a diverse range of resources that promote happiness and support students on their mental health journey. Moreover, we connect students to the University of Waterloo’s available mental health resources."}, 
    {q : "What Makes SMILE unique ? ", 
    a : "The SMILE clubs are a unique and inclusive mental health community that goes beyond a traditional support group for students with mental health disorders. Our approach is to support all students, regardless of their mental health status, through their journey toward improved mental well-being. What sets us apart is our charming and heartwarming resources, which are designed to create a welcoming and inclusive environment for all. Our community is the key to our success, and we prioritize building strong relationships between members to foster a supportive and safe space for everyone. In short, the SMILE clubs are a special place where all students can come together to support each other and promote positive mental health."}, 
    {q : "Who can Join SMILE?", 
    a : "Any student is welcome to join the SMILE club regardless of their mental health status. The club is open to all students who are interested in promoting positive mental health, seeking happiness, or connecting with a community of peers who are supportive and understanding."}, 
    {q : "How can I volunteer for SMILE ?", 
    a : "If you're interested in volunteering for the SMILE club's events and activities, we would love to have your help! The SMILE club is run by UW students who are committed to supporting their peers, and we welcome anyone who shares our passion to join us. To explore volunteer opportunities with the club, please contact us at the provided information, and we'll be happy to discuss how you can get involved."}, 
]

function Faq() {
    return ( <main className='py-20 mx-8 sm:mx-20 flex flex-col gap-4'>
        <h1 className='text-2xl sm:text-5xl border-2 sm:border-4 border-black rounded-full w-min px-4 py-2'>
            FAQ
        </h1>
        <div className='border-b-2 sm:border-b-4 border-black '>
        {QAlist.map((item, index) =>  (
            <div key={index}> 
                <QA q={item.q} a={item.a}/> 
            </div>) )} 
        </div>
    </main>)
}

export default Faq