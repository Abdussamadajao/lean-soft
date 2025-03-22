"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import {
  FaSearch,
  FaTimes,
  FaBars,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  // FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(80); // Initialize lastScrollY state
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection?.offsetHeight || 0;

      // Check if the user has scrolled past the hero section
      setIsHeroVisible(window.scrollY <= heroHeight);

      // Handle sliding navbar visibility
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY); // Update lastScrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Add lastScrollY as a dependency

  const navLinks = [
    "Home",
    "About",
    "Service",
    "Projects",
    "News",
    "Team",
    "Careers",
    "Contact",
  ];

  return (
    <header className="fixed z-30 top-0 left-0 w-full">
      {/* Top Contact Bar */}
      {pathname === "/" && (
        <div className={`bg-gray-100 ${isHeroVisible ? "block" : "hidden"} `}>
          <div className="container-custom py-3 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-700 text-sm">
              <div className="flex items-center space-x-1">
                <FaPhone size={12} color="#2AB9EB" />
                <span>+1-CALL-ALVEUM</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaEnvelope size={12} color="#2AB9EB" />
                <a
                  href="mailto:contact@alveum.com"
                  className="hover:text-electblue transition-colors duration-300"
                >
                  contact@alveum.com
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              {[
                { icon: FaFacebookF, link: "/" },
                // { icon: FaXTwitter, link: "/" },
                { icon: FaLinkedinIn, link: "/" },
                { icon: FaInstagram, link: "/" },
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  aria-label={`Social link ${index + 1}`}
                >
                  <Icon size={12} color="#2AB9EB" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className={`bg-white z-40 transition-transform duration-300`}>
        <div className="container-custom py-4 flex justify-between items-center">
          <Link href="/" aria-label="Home">
            <Image
              src={logo}
              alt="Alveum Logo"
              width={272}
              height={38}
              className="cursor-pointer"
              priority
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-electblue"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <FaSearch
              size={20}
              className="text-electblue cursor-pointer ml-4"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-gray-700 text-sm">
            {navLinks.map((item) => {
              const href = `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className={`hover:text-electblue transition-colors duration-300 ${
                    pathname === href ? "text-electblue font-bold" : ""
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            <FaSearch
              size={20}
              className="text-electblue cursor-pointer"
              aria-label="Search"
            />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 absolute w-full z-50">
          <nav className="flex flex-col space-y-4 text-gray-700 text-sm">
            {navLinks.map((item) => {
              const href = `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-electblue transition-colors duration-300 ${
                    pathname === href ? "text-electblue font-bold" : ""
                  }`}
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
