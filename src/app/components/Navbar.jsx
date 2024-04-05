"use client";
import React, { useState } from 'react'
import Image from 'next/image'; 
import Link from "next/link";

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
                        <Image src="/images/dr.png" alt="dr" width={60} height={50} />
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
</div>
)

}

export default Navbar
