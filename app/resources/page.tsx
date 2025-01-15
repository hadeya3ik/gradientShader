import React from 'react'
import Resources from '@/components/resources/Resources'
import NavBar from '@/Components/NavBar'

function page() {
  return (
    <main className=''>
        <NavBar/>
        <div className='sm:px-12 md:px-20 px-8'>
          <div className='pt-8 text-2xl sm:text-3xl md:text-5xl whitespace-nowrap'>Resources</div>
          <p className=' text-base sm:text-2xl max-w-7xl'>Whether youre seeking light-hearted engagement through simple, enjoyable activities or require more serious clinical assistance, a vast array of resources are gathered here to support you throughout your mental health journey.</p>
          <Resources/>
        </div>
    </main>
  )
}

export default page