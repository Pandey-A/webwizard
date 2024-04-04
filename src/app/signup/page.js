"use client";
import Head from "next/head";
import React from "react";
import { FaFacebookF, FaLinkedin, FaGoogle ,FaRegEnvelope } from 'react-icons/fa';
import {MdLockOutline} from "react-icons/md";
import Link from "next/link";

export default function Home(){
    return(
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
                        <h2 className="text-3xl font-bold text-purple-400 mb-2">Sign In To Account</h2>
                        <div className="border-2 w-10 border-purple-400 inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaFacebookF  />
                                
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaLinkedin  />
                                
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaGoogle  />
                                
                            </a>

                        </div>
                        <p className="text-gray-400 my-3" > or use your email account </p>
                        <div className="flex flex-col items-center m-3">
                            <div className="bg-gray-100 w-64 p-2 flex items-center "><FaRegEnvelope className="text-gray-400 m-2"/>
                            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" /></div>
                        </div>
                        <div className="flex flex-col items-center mb-3">
                            <div className="bg-gray-100 w-64 p-2 flex items-center "><MdLockOutline className="text-gray-400 m-2"/>
                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" /></div>
                        </div>
                        <div className="flex justify-between item w-64 mb-5 ">
                            <label className="flex justify-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Remember Me</label>
                            <a href="#" className="text-xs">Forgot Password?</a>
                        </div>
                        <Link href="/" className="border-2 border-purple-400 text-purple-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-400 hover:text-white">Sign Up</Link>

                    </div>
                    </div> 
                <div className="w-2/5 bg-purple-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
                    <h2 className=" text-3xl font-bold mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-2">Fill up your personal information and start your journey with us .</p>
                    <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-400">Sign Up</a>
                </div>
                </div>
            </main>
        </div>
    )
}