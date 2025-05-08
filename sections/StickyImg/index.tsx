"use client";

import Image from "next/image";
import stcImg from "@/public/images/bg3.jpg"; 
import React from "react";

const StickyImg = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 z-[-1] overflow-hidden"> 
        <Image
          src={stcImg} 
          alt="Sticky Image" 
          fill 
          className="object-cover scale-100 md:scale-125" 
        />
      </div>

        <div className="relative w-full z-10 flex flex-col items-center justify-center text-white">
            <div className="bg-black/58 w-full px-4 py-6 md:py-8 lg:py-10">
                <div className="container-custom mx-auto flex flex-col md:flex-row items-center lg:justify-between md:gap-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold max-w-[800px]">
                    We Are The Best In Business And Have The Best Quality Of Service.
                </h1>

                <button
                  style={{ width: "213px", height: "52px" }}
                  onClick={() => window.location.href = "/contact"}
                  className="bg-transparent border-white border-2 text-white rounded-sm text-base lg:text-lg font-semibold hover:cursor-pointer transition-all whitespace-nowrap mt-4 md:mt-0 flex items-center justify-center"
                >
                  CONTACT US NOW
                </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default StickyImg;