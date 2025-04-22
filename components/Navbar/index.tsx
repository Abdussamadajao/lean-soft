"use client";

import React, { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";

type NavLink = {
  name: string;
  target: string;
  isLink?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { name: "Home", target: "hero" },
  { name: "About", target: "about" },
  { name: "Service", target: "services" },
  { name: "Projects", target: "projects" },
  { name: "News", target: "news" },
  { name: "Team", target: "team" },
  // { name: "Careers", target: "careers", isLink: true },
  { name: "Contact", target: "contact", isLink: true },
];

const SCROLL_THRESHOLD = 5;
const HERO_SCROLL_OFFSET = 100;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Only update state if scroll difference is significant
    if (Math.abs(currentScrollY - lastScrollY) > SCROLL_THRESHOLD) {
      setIsVisible(
        currentScrollY < lastScrollY || currentScrollY < HERO_SCROLL_OFFSET
      );
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const getLinkHref = (item: NavLink) => {
    return item.isLink
      ? item.name === "Home"
        ? "/"
        : `/${item.name.toLowerCase()}`
      : `/#${item.target}`;
  };

  const isActive = (item: NavLink) => {
    if (item.isLink) {
      const href = item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`;
      return pathname === href || (item.name === "Home" && pathname === "/");
    }
    return pathname === `/#${item.target}`;
  };

  const renderNavLink = (item: NavLink, isMobile = false) => {
    const active = isActive(item);
    const baseClasses = `hover:bg-electblue hover:text-white font-bold transition-colors duration-300 ${
      active
        ? "bg-electblue text-white"
        : isMobile
        ? "text-gray-400"
        : "text-gray-700"
    }`;

    const mobileClasses = "p-3 pl-4 border-y border-accent-foreground";
    const desktopClasses = "py-6 px-4";

    return (
      <Link
        key={item.name}
        href={getLinkHref(item)}
        onClick={() => isMobile && setIsOpen(false)}
        className={`${baseClasses} ${
          isMobile ? mobileClasses : desktopClasses
        }`}>
        {item.name}
      </Link>
    );
  };

  return (
    <header className="fixed z-30 top-0 left-0 w-full border-b">
      <div
        className={`bg-white z-40 transition-transform duration-300 py-4 lg:py-0 $`}>
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="cursor-pointer" aria-label="Home">
            <h1 className="text-4xl font-extrabold">LOGO</h1>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-electblue">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <FaSearch
              size={20}
              className="text-electblue cursor-pointer ml-4"
              aria-label="Search"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0 text-xl font-bold">
            {NAV_LINKS.map((item) => renderNavLink(item))}
            <FaSearch
              size={20}
              className="text-electblue cursor-pointer ml-4"
              aria-label="Search"
            />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black shadow-md absolute w-full left-0 z-50">
            <nav className="flex flex-col w-full">
              {NAV_LINKS.map((item) => renderNavLink(item, true))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
