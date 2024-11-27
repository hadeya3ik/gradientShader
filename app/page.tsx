'use client';
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image';

const Scene = dynamic(() => import("@/components/Scene"), {
  loading : () => <p></p>,
  ssr :false
},);

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      {/* Scene container */}
      <div className='shader h-screen w-screen '>
        <Scene />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full flex justify-center items-center">
        <p className='text-white lol text-[30vw] mix-blend-difference font-extrabold'>smile</p>
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="relative h-screen w-screen">
//       <div className='shader h-screen w-screen '>
//         <Scene />
//       </div>
//     </main>
//   );
// }