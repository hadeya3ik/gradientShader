import React from 'react';

function Join() {
  return (
    <main className="flex flex-col justify-center w-full items-center">
      <div className="pt-40 text-4xl sm:text-5xl md:text-7xl w-full flex flex-col sm:gap-4 gap-2 items-center">
        <div className="flex flex-col items-center gap-8 font-medium">
          <h1>Lets Paint a   
            <span className='bg-gradient-to-r from-[#FF8FF2] to-[#71A7FF] bg-clip-text text-transparent'> Happier
            </span>,
          </h1>
          <h1>
            <span className='bg-gradient-to-r from-[#FFB472] to-[#FF7AB1] bg-clip-text text-transparent'>Healthier
            </span>, you!
          </h1>
        </div>
      </div>
      <div className="text-2xl flex pt-8 gap-4 items-start">
        <ul
          className="max-w-lg text-base sm:text-2xl flex gap-8 flex-col"
          style={{ listStyleType: 'disc', paddingLeft: '20px' }}
        >
          <div className='flex gap-8'>
            <li>Embrace an abundance of resources designed to sprinkle joy into your day!</li>
            <li>Jump into a carnival of uplifting events and heartwarming mental health activities.</li>
          </div>
          <div className='flex gap-8'>
            <li>Be part of a compassionate SMILE squad, where everyone has each others backs.</li>
            <li>Feeling low? Were here with open hearts and listening ears for you!</li>
          </div>
        </ul>
      </div>
      <div className="flex text-2xl gap-4 whitespace-nowrap w-[70%]">
        <div className='w-full border-[1px] flex sm:border-[1px] bg-[#191818] border-white text-white placeholder-white rounded-full px-1 py-1'>
          <input
            placeholder="Enter your Email"
            className="w-full  bg-[#191818] border-white text-white placeholder-white rounded-full px-4 focus:outline-none focus:ring-0"
          />
          <div className="text-[#191818] bg-gradient-to-r from-pink-400 to-blue-400 rounded-full w-min px-4 py-1">
            Subscribe
          </div>
        </div>
        </div>
        <p>Join 1500+ Smilies</p>
        
    </main>
  );
}

export default Join;