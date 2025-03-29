"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  FaSearch,
  FaTimes,
  FaBars,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(80);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection?.offsetHeight || 0;

      setIsHeroVisible(window.scrollY <= heroHeight);

      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
    { name: "Service", target: "services" },
    { name: "Projects", target: "projects" },
    { name: "News", target: "news" },
    { name: "Team", target: "team" },
    { name: "Careers", target: "careers" },
    { name: "Contact", target: "contact", isLink: true }, // This will remain a regular Link
  ];

  return (
    <header className="fixed z-30 top-0 left-0 w-full border-b">
      <div className="bg-white z-40 transition-transform duration-300 py-4 lg:py-0">
        <div className="container-custom flex justify-between items-center">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            aria-label="Home"
          >
            <h1 className="text-4xl font-extrabold">LOGO</h1>
          </ScrollLink>

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
          <nav className="hidden lg:flex items-center space-x-0 text-gray-700 text-xl font-bold">
            {navLinks.map((item) => {
              if (item.isLink) {
                const href =
                  item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`;
                return (
                  <Link
                    key={item.name}
                    href={href}
                    className={`hover:bg-electblue py-6 px-4 hover:text-white transition-colors duration-300 ${
                      pathname === href ||
                      (item.name === "Home" && pathname === "/")
                        ? "bg-electblue text-white font-bold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <ScrollLink
                  key={item.name}
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  activeClass="bg-electblue text-white font-bold"
                  className={`hover:bg-electblue py-6 px-4 hover:text-white transition-colors duration-300 cursor-pointer ${
                    pathname === "/"
                      ? ""
                      : "hover:bg-transparent hover:text-electblue"
                  }`}
                  ignoreCancelEvents={true}
                >
                  {item.name}
                </ScrollLink>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -995 }}
            animate={{ y: 0 }}
            exit={{ y: -995 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden flex bg-black shadow-md absolute w-[90%] left-1/2 transform -translate-x-1/2 z-50 px-4 py-2"
          >
            <nav className="flex flex-col text-gray-400 text-sm w-full">
              {navLinks.map((item) => {
                if (item.isLink) {
                  const href =
                    item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`;
                  return (
                    <Link
                      key={item.name}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`hover:bg-electblue hover:text-white font-bold transition-colors duration-300 p-3 pl-4 border-y border-accent-foreground ${
                        pathname === href ||
                        (item.name === "Home" && pathname === "/")
                          ? "bg-electblue text-white font-bold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <ScrollLink
                    key={item.name}
                    to={item.target}
                    smooth={true}
                    duration={500}
                    spy={true}
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-electblue hover:text-white font-bold transition-colors duration-300 p-3 pl-4 border-y border-accent-foreground cursor-pointer"
                    activeClass="bg-electblue text-white font-bold"
                  >
                    {item.name}
                  </ScrollLink>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
