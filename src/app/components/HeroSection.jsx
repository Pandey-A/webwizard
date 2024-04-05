"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

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
        <Image src="/images/mern.png" alt='mern' height={300} width={300} className='absolute transform -transform-x-6 -translate-y-1/3  right-8 '/>
        <Image src="/images/im.png" alt='im' height={300} width={300} className='absolute transform -transform-x-6 -translate-y-5/7  right-1/4 '/>
        <p className='text-white text-lg text-center mb-6 lg:text-xl'>
        So, are you prepared to embark on this journey into the heart of the digital realm? With the Web Wizard by your side, there&apos;s no limit to what you can achieve. Let us begin, and may the magic of coding illuminate your path to greatness!
        </p>
        <div className='flex justify-center'>
            <br></br>
            <br></br>
            <Link href='/team' ><button className=' px-8 py-4 sm:w-fit rounded-full mr-4 bg-purple-500 hover:bg-slate-200 text-black '>Explore World</button></Link>
            
            <Image src="/images/web.png" alt='web' height={300} width={300} className='absolute transform -transform-x-6 -translate-y-3/7  right-8 '/>
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
        className='absolute transform -transform-x-6 -translate-y-1/3 top-1/4  right-8 '
        height={500}
        width={500} />
        </div>
    </section>
    
  )
}

export default HeroSection
