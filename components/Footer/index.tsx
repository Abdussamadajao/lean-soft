import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaSkype,
} from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import logo from "@/public/images/logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-1 text-white">
            <div className="flex flex-col md:flex-row gap-8 lg:w-1/2 w-full">
              <div className="flex flex-col gap-4 md:w-1/2 w-full">
                <div>
                  <h1 className="text-white text-4xl font-extrabold">LOGO</h1>
                </div>
                <div className="max-w-[270px]">
                  <p className="text-[14px]">
                    Channeling Innovation to transform abstract AI concepts into
                    tangible, groundbreaking solutions that redefine industries
                    and unlock new realms of possibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold mb-4">LET'S TALK</h3>
                  <div className="flex space-x-3">
                    {[
                      FaLinkedinIn,
                      FaFacebookF,
                      FaXTwitter,
                      FaInstagram,
                      FaSkype,
                    ].map((Icon, index) => (
                      <a
                        key={index}
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center bg-electblue rounded-full hover:bg-[#1E91C1] transition"
                      >
                        <Icon size={16} color="white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <h2 className="text-[14px] font-semibold mb-2">QUICK LINKS</h2>
                <div className="w-10 h-[1px] bg-electblue mb-4"></div>
                <ul className="space-y-2">
                  {[
                    { name: "Home", link: "/" },
                    { name: "About Us", link: "/about" },
                    { name: "Services", link: "/services" },
                    { name: "Projects", link: "/projects" },
                    { name: "Contact", link: "/contact" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="flex items-center text-[14px] font-semibold text-white hover:text-electblue transition"
                      >
                        <HiOutlineChevronRight className="mr-2 transition" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 lg:w-1/2 w-full">
              <div className="md:w-1/2 w-full">
                <h2 className="text-[14px] font-semibold mb-2">LATEST NEWS</h2>
                <div className="w-10 h-[1px] bg-electblue mb-4"></div>
                <div className="flex flex-col space-y-3">
                  <div className="max-w-[230px]">
                    <p className="text-[14px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Delectus, adipisci!
                    </p>
                    <p className="text-electblue mt-1 text-[13px] font-bold">
                      March 14, 2025
                    </p>
                  </div>
                  <div className="max-w-[230px]">
                    <p className="text-[14px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Delectus, adipisci!
                    </p>
                    <p className="text-electblue mt-1 text-[13px] font-bold">
                      Feb 22, 2025
                    </p>
                  </div>
                  <div className="max-w-[230px]">
                    <p className="text-[14px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Delectus, adipisci!
                    </p>
                    <p className="text-electblue mt-1 text-[13px] font-bold">
                      Jan 30, 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <h2 className="text-[14px] font-semibold mb-2">NEWS LETTER</h2>
                <div className="w-10 h-[1px] bg-electblue mb-4"></div>
                <form className="flex flex-col space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name..."
                    className="p-2 bg-[#313131] text-white focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email..."
                    className="p-2 bg-[#313131] text-white focus:outline-none"
                  />
                  <textarea
                    placeholder="Your Comments..."
                    className="p-2 bg-[#313131] text-white focus:outline-none h-24"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-electblue hover:bg-[#1E91C1] transition text-white font-semibold py-2 rounded-md"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#121212] text-center p-4 text-white font-semibold">
        <span className=" text-[14px]">
          © 2024{" "}
          <a href="#" className="text-electblue">
            Alveum, Inc.
          </a>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
