import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="relative h-[400px] pt-[120px] bg-[url(/images/contact.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 "></div>
      <div className="flex flex-col justify-center items-center h-full z-20 relative">
        <h1 className="text-[40px] font-semibold text-white">Contact Us</h1>
        <ul className="flex gap-2 text-white items-center">
          <li className="">
            <Link href="/" className="text-base font-normal">
              Home
            </Link>
          </li>
          <IoIosArrowForward />
          <li className="text-base font-medium leading-[30px] text-electblue">
            Contact Us
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
