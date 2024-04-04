"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 ">
            <div className='col-span-7 place-self-center'>
                <br></br>
                <br></br>
                <br></br>
                
        <div></div><h1 className="text-white mb-4 text-center text-4xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to bg-pink-500'>Hello , I&apos;m {""}</span>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Dr. Strange',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Wizard',
        1000,
        'Developer',
        1000,
        'Your Friend',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className='text-white text-lg text-center px-9 mb-6 lg:text-xl'>
        Ah, greetings, traveler of the digital expanse! It seems you&apos;ve stumbled upon the sanctum of the Web Wizard himself – Doctor Strange at your service. What brings you to seek the wisdom of the arcane arts intertwined with the mysteries of coding? 
        Picture yourself as a novice apprentice, eager to learn the secrets of the web. Close your eyes and envision the code as a tapestry of intricate spells waiting to be unraveled. With each keystroke, you cast your own enchantments upon the digital canvas, bringing your visions to life.
        </p>
        <p className='text-white text-lg text-center mb-6 lg:text-xl'>
        So, are you prepared to embark on this journey into the heart of the digital realm? With the Web Wizard by your side, there&apos;s no limit to what you can achieve. Let us begin, and may the magic of coding illuminate your path to greatness!
        </p>
        <div className='flex justify-center'>
            <br></br>
            <br></br>
            <button className=' px-8 py-4 sm:w-fit rounded-full mr-4 bg-purple-500 hover:bg-slate-200 text-black '>Explore World</button>
        </div>
        </div>
        <div className='col-span-5'>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Image src="/images/drstrange.png" 
        alt='drstrange'
        className='absolute transform -transform-x-2 -translate-y-1/2 top-1/3 left-2/3 '
        height={500}
        width={500} />
        </div>
        
        <h1 className="text-white mb-4 text-center text-4xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to bg-pink-500'>Learn The Magic Of {""}</span>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Development',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        'Android Development',
        3000,
        'DevOps',
        3000,
        'DSA',
        3000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <br></br>
        <br></br>
        <div>
          <h1 className="text-white mb-4 text-left px-6 text-4xl lg:text-6xl font-bold">
            Web Development
          </h1>
          <div className="border-2 w-60 px-10 border-white inline-block mb-2"></div>
          <h2 className='text-white mb-4 text-left px-6 lg:text-xl flex justify-around'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content&apos; here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a &apos;search&apos; for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h2>
        </div>
    </section>
    
  )
}

export default HeroSection
