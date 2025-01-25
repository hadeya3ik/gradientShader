import React from 'react';

function Join() {
  return (
    <main className="flex flex-col justify-center w-full items-center -pt-40 ">
      <div className=" text-4xl md:text-5xl w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 md:gap-4 font-medium">
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
      <div className="flex sm:max-w-lg md:max-w-2xl lg:max-w-4xl sm:px-0 px-4">
        <ul
          className="max-w-lg flex sm:gap-8 gap-4 flex-col w-full"
          style={{ listStyleType: 'disc', paddingLeft: '20px' }}
        >
          <p></p>
          <div className='w-full flex sm:gap-8 gap-4 flex-col sm:flex-row'>
            <li>Embrace an abundance of resources designed to sprinkle joy into your day!</li>
            <li>Jump into a carnival of uplifting events and heartwarming mental health activities.</li>
          </div>
          <div className='flex sm:gap-8 gap-4 flex-col sm:flex-row'>
            <li>Be part of a compassionate SMILE squad, where everyone has each others backs.</li>
            <li>Feeling low? Were here with open hearts and listening ears for you!</li>
          </div>
        </ul>
      </div>
      <div className="flex text-lg sm:text-2xl md:text-2xl gap-4 whitespace-nowrap w-full md:max-w-xl pt-8  px-4">
        <div className='w-full border-[1px] flex sm:border-[1px] bg-[#191818] border-white text-white placeholder-white rounded-full px-1 py-1'>
          <input
            placeholder="Enter your Email"
            className="w-full  bg-[#191818] border-white text-white placeholder-white rounded-full px-4 focus:outline-none focus:ring-0"
          />
          <div className="text-[#191818] cursor-pointer bg-gradient-to-r from-pink-400 to-blue-400 rounded-full w-min px-4 py-1">
            Subscribe
          </div>
        </div>
        </div>
        <p className='pt-4'>Join 1500+ Smilies</p>
        
    </main>
  );
}

export default Join;