'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaBars, FaPhone, FaEnvelope, FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <header>
      <div className="bg-gray-100">
        <div className="container mx-auto py-3 px-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex max-[405px]:flex-col flex-row space-y-1 max-[405px]:space-y-1 max-[405px]:space-x-0 space-x-6 text-gray-700 text-[13px]">
            <div className="flex items-center space-x-1 text-black">
              <FaPhone size={12} color="#2AB9EB" />
              <span>+1-CALL-ALVEUM</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope size={12} color="#2AB9EB" />
              <a href="/" className="text-black hover:text-electblue transition-colors duration-300 ease-in-out">
                contact@alveum.com
              </a>
            </div>
          </div>
          <div className="flex space-x-3">
            <a href="/"><FaFacebookF size={12} color="#2AB9EB" /></a>
            <a href="/"><FaXTwitter size={12} color="#2AB9EB" /></a>
            <a href="/"><FaLinkedinIn size={12} color="#2AB9EB" /></a>
            <a href="/"><FaInstagram size={12} color="#2AB9EB" /></a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto py-4 px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex justify-center lg:justify-start">
            <Link href="/">
              <Image src={logo} alt="Alveum Logo" width={272} height={38} className="cursor-pointer" />
            </Link>
          </div>

          <div className="flex items-center justify-between w-full lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-electblue">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            
            <FaSearch size={20} className="text-electblue cursor-pointer" />
          </div>

          <nav className="hidden lg:flex space-x-6 text-black font-semibold text-[1rem]">
            {['Home', 'About', 'Service', 'Projects', 'News', 'Team', 'Careers', 'Contact'].map((item) => {
              const href = `/${item.toLowerCase()}`;
              return (
                <Link 
                  key={item} 
                  href={href} 
                  className={`hover:text-electblue transition-colors duration-300 ${pathname === href ? 'text-electblue font-bold' : ''}`}
                >
                  {item}
                </Link>
              );
            })}
            <FaSearch size={20} className="text-electblue cursor-pointer hidden lg:inline-block" />
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 absolute w-full z-50">
          <nav className="flex flex-col space-y-4 text-black font-semibold text-[1rem]">
            {['Home', 'About', 'Service', 'Projects', 'News', 'Team', 'Careers', 'Contact'].map((item) => {
              const href = `/${item.toLowerCase()}`;
              return (
                <Link 
                  key={item} 
                  href={href} 
                  className={`hover:text-electblue transition-colors duration-300 ${pathname === href ? 'text-electblue font-bold' : ''}`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
