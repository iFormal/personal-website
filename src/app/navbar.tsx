import Link from "next/link";
import React, { useEffect, useState, useRef } from 'react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
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
    <nav
      ref={navbarRef}
      className="backdrop-blur-sm p-6 sticky top-0 flex justify-center items-center border-b border-0 border-gray-700 border-opacity-50" 
    >
      <div className="flex space-x-16 list-none">
        <li><a href="#about-me" className="font-medium text-gray-400 hover:text-white">About Me</a></li>
        <li><a href="#skills" className="font-medium text-gray-400 hover:text-white">Skills</a></li>
        <li><a href="#projects" className="font-medium text-gray-400 hover:text-white">Projects</a></li>
        <li><a href="#experiences" className="font-medium text-gray-400 hover:text-white">Experiences</a></li>
        <li><a href="#contact" className="font-medium text-gray-400 hover:text-white">Contact</a></li>
      </div>
    </nav>
  );
}