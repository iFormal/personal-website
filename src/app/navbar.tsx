'use client'

import Link from "next/link";
import React, { useEffect, useState, useRef } from 'react';

export const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
          const sticky = window.scrollY >= navbarRef.current!.offsetTop;
          setIsSticky(sticky);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav ref={navbarRef} className="backdrop-blur-sm p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold"><Link href='/'>James Ang</Link></div>
                <div className="flex space-x-16 list-none">
                    <li><a href="/about-me" className="text-white">About Me</a></li>
                    <li><a href="/skills" className="text-white">Skills</a></li>
                    <li><a href="/projects" className="text-white">Projects</a></li>
                    <li><a href="/experiences" className="text-white">Experiences</a></li>
                    <li><a href="/contact" className="text-white">Contact</a></li>
                </div>
            </div>
        </nav>
    );
}