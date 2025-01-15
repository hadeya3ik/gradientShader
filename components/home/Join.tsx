import React from 'react';
import Smile from '@/images/RainbowSmile.svg';
import Arrow from '@/images/RainbowArrow.svg';
import Circles from '@/images/CirclesRainbow.svg';

function Join() {
  return (
    <main className="flex flex-col justify-center w-full items-center">
      <div className="pt-40 text-4xl sm:text-5xl md:text-7xl w-full flex flex-col sm:gap-4 gap-2 items-center">
        <div className="flex gap-8">
          <h1>Lets Paint</h1>
          <Smile />
        </div>
        <div className="flex gap-8">
          <Circles className="self-end" /> 
          <h1>a Happier,</h1>
        </div>
        <div className="flex text-2xl gap-4 whitespace-nowrap w-[70%]">
          <input
            placeholder="Enter your Email"
            className="w-full border-2 bg-[#F4F2E3] sm:border-4 border-black rounded-full px-4 py-2"
          />
          <div className="border-2 sm:border-4 bg-purple-300 border-black rounded-full w-min px-4 py-2">
            Join Us
          </div>
        </div>
        <h1>Healthier you!</h1>
      </div>
      <div className="text-2xl flex pt-8 gap-4 items-start">
        <Arrow className="md:max-w-40 max-w-20"/> 
        <ul
          className="max-w-lg text-base sm:text-2xl"
          style={{ listStyleType: 'disc', paddingLeft: '20px' }}
        >
          <li>Embrace an abundance of resources designed to sprinkle joy into your day!</li>
          <li>Jump into a carnival of uplifting events and heartwarming mental health activities.</li>
          <li>Be part of a compassionate SMILE squad, where everyone has each others backs.</li>
          <li>Feeling low? Were here with open hearts and listening ears for you!</li>
          <li>SMILE and JOIN :</li>
        </ul>
      </div>
    </main>
  );
}

export default Join;