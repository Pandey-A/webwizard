"use client";
import React, { useState } from 'react'
import Image from 'next/image'; 
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Head from 'next/head';
import { FaFacebookF, FaLinkedin, FaGoogle ,FaRegEnvelope } from 'react-icons/fa';
import {MdLockOutline} from "react-icons/md";


const Navbar = () => {
    const [isClick , setisClick]= useState(false);
    const toggleNavbar=() => {
        setisClick(!isClick);
    };
  return (
    <div>
    <nav className='bg-black/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0 flex justify-start'>
                        <Image src="/images/dr.png" alt="dr" width={60} height={50}  />
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                        <Link href='/' className='text-white'>Home</Link>
                        
                        <Link href='/team' className='text-white'>Team</Link>
                        <Link href='/signup' className='text-white'><button className=' px-6 py-3 rounded-full mr-4 bg-purple-500 hover:bg-slate-200 text-black '>Sign Up</button></Link>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar} >
                        {isClick ? (
                            <svg
                            className='h-6 w-6'
                            xmlns='http://w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                                <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6112 12' />
                            </svg>
                        ): (
                            <svg
                            className='h-6 w-6'
                            xmlns='http://w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                                <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16m-7 6h7' />
                            </svg>

                        )}
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
            <div className="md:hidden">
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <Link href='/' className='text-white'>Home</Link>
                        <Link href='/team' className='text-white block'>Team</Link>
                        <Link href='/signup' className='text-white block'>Sign Up</Link>
                </div>
            </div>
        )}
    </nav>
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
    <div>
    <>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Web<span className="text-blue-600">Wizards</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaGithub className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
                        <Image  className="pb-10" src="/images/dr.png"
                        alt="dr"
                        width={100}
                        height={200} />
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Learn</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Web Development
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Android Development
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							DevOps
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							DSA
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2024-2025 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Web Wizards{" "}
					</span>
				</h1>
			</div>
		</>
    </div>
    
</div>

)

}

export default Navbar
