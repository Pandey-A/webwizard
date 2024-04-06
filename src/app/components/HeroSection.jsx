"use client";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Head from 'next/head';
import { FaFacebookF, FaLinkedin, FaGoogle ,FaRegEnvelope } from 'react-icons/fa';
import {MdLockOutline} from "react-icons/md";

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
        <>
<div>
    <h1 className="text-white mb-4 py-6 text-center text-4xl lg:text-7xl font-extrabold">
    <h2 className="text-white mb-4 py-4 text-center text-4xl lg:text-3xl font-extrabold">MEET OUR</h2>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to bg-pink-500'> Team {""}</span></h1></div>
<div className="flex flex-col items-center min-h-screen py-2">
            <Head>
                <title>Web Wizards</title>
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-2-4xl" >
                <div className="w-3/5 p-5">
                    <div className="text-left font-bold">
                        <span className="text-purple-400" >Web</span>Wizards
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-purple-400 mb-2">Developer</h2>
                        <div className="border-2 w-10 border-purple-400 inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                        
                            <a href="#" className=" rounded-full p-3 mx-1">
                                <Image src="/images/Thor.png" alt='Thor' width={200} height={200} />
                                
                            </a>
                            
                        </div>
                        <a href="#" className="border-2 border-purple-400 text-purple-400 rounded-full px-12 py-2 inline-block font-extrabold hover:bg-purple-400 hover:text-white">THOR</a>
                        <div className="flex justify-center my-2">
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaFacebookF  />
                                
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaLinkedin  />
                                
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaGithub  />
                                
                            </a>

                        </div>
                    </div>
                    </div> 
                <div className="w-2/5 bg-purple-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
                    <h2 className=" text-3xl font-bold mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-2">Myself Thor the son of Odin and I developed this website for you  I know basic web devlopment and my current techstack is MERN I am a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you are looking for a developer to add to your team, I would love to hear from you </p>
                    
                </div>
                </div>
            </main>
        </div>


        <div className="flex flex-col items-center min-h-screen py-2">
            <Head>
                <title>Web Wizards</title>
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-2-4xl" >
                <div className="w-3/5 p-5">
                    <div className="text-left font-bold">
                        <span className="text-purple-400" >Web</span>Wizards
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-purple-400 mb-2">Designer</h2>
                        <div className="border-2 w-10 border-purple-400 inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                        
                            <a href="#" className=" rounded-full p-3 mx-1">
                                <Image src="/images/Spider.png" alt='Spider' width={200} height={200} />
                                
                            </a>
                            
                        </div>
                        <a href="#" className="border-2 border-purple-400 text-purple-400 rounded-full px-12 py-2 inline-block font-extrabold hover:bg-purple-400 hover:text-white">SPIDEY</a>
                        <div className="flex justify-center my-2">
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaFacebookF  />
                                
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaLinkedin  />
                                
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaGithub  />
                                
                            </a>

                        </div>
                    </div>
                    </div> 
                <div className="w-2/5 bg-purple-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
                    <h2 className=" text-3xl font-bold mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-2">Your Friendly Neighbourhood Spiderman As a born and raised New Yorker, I take food quite seriously. In fact, I based my entire graphic design career around it! I have worked for a variety of restaurants and franchises to create logos, brochures, websites, menus, product labels and countless other deliverables</p>
                    
                </div>
                </div>
            </main>
        </div>


</>
    </section>
    
  )
}

export default HeroSection
