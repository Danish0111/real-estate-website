"use client"
import { Hamburger, Menu } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='flex justify-between items-center gap-8 p-4 px-10 md:px-28 relative'>
            <div className="flex justify-between items-center gap-10">
                <div className="uppercase font-bold leading-none tracking-wide">Horizon <div>Estate</div></div>
                <ul className='justify-start items-center gap-8 font-medium hidden md:flex'>
                    <li className='hover:text-gray-600 transition'><Link href="/">Home</Link></li>
                    <li className='hover:text-gray-600 transition'><Link href="/about">About</Link></li>
                    <li className='hover:text-gray-600 transition'><Link href="/projects">Projects</Link></li>
                    <li className='hover:text-gray-600 transition'><Link href="/contact">Contact</Link></li>
                    <li className='hover:text-gray-600 transition'><Link href="/privacy-page">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="block md:hidden">
                <Menu className='size-5' onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <div className={`absolute ${isMenuOpen ? "right-0" : "hidden"} transition-all top-14 bg-white w-full p-4 h-screen px-10 z-20`}>
                    {isMenuOpen && (
                        <ul className='justify-start items-center gap-8 font-medium flex flex-col'>
                            <li className='hover:text-gray-600 transition'><Link onClick={()=> setIsMenuOpen(!isMenuOpen)} href="/">Home</Link></li>
                            <li className='hover:text-gray-600 transition'><Link onClick={()=> setIsMenuOpen(!isMenuOpen)} href="/about">About</Link></li>
                            <li className='hover:text-gray-600 transition'><Link onClick={()=> setIsMenuOpen(!isMenuOpen)} href="/projects">Projects</Link></li>
                            <li className='hover:text-gray-600 transition'><Link onClick={()=> setIsMenuOpen(!isMenuOpen)} href="/contact">Contact</Link></li>
                            <li className='hover:text-gray-600 transition'><Link onClick={()=> setIsMenuOpen(!isMenuOpen)} href="/privacy-page">Privacy Policy</Link></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="hidden md:block border p-2 text-black rounded text-center pb-2 hover:bg-black hover:text-white hover:cursor-pointer transition">Post a property</div>
        </div>
    )
}

export default Navbar
