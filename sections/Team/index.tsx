"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Tajudeen Nurudeen",
      title: "CEO",
      image: "/images/dummy.jpg",
    },
    {
      id: 2,
      name: "Ajao AttaulMujeeb",
      title: "CTO",
      image: "/images/dummy.jpg",
    },
    {
      id: 3,
      name: "Abdul Rahman Kole-Ibrahim",
      title: "Technical Team Lead",
      image: "/images/dummy.jpg",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    breakpoints: {
      "(min-width: 640px)": { align: "start", loop: true },
      "(min-width: 768px)": { align: "start", loop: true },
    },
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const autoSlide = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [emblaApi, isHovered]);

  return (
    <section id="team" className="py-12 bg-white">
      <div className="container-custom mx-auto">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-[2rem] font-bold mb-4 text-black">
            Our <span className="text-electblue">Team</span>
          </h2>
          <h5 className="text-lg text-textcolor">
            Our multidisciplinary team of engineers, designers, and data
            scientists are passionate about solving hard problems and shipping
            great software.
          </h5>
        </div>

        <div
          className="relative mt-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex-[0_0_calc(100%-16px)] sm:flex-[0_0_calc(50%-8px)] md:flex-[0_0_calc(33.333%-10.666px)] px-3 mr-4">
                  <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-[280px] object-cover object-top"
                    />
                    <div className="absolute bottom-0 w-full bg-electblue text-white p-3 bg-opacity-90 text-center">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm">{member.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              className="p-2 rounded-full bg-gray-300 hover:bg-electblue hover:text-white transition-colors"
              onClick={() => emblaApi && emblaApi.scrollPrev()}>
              <ChevronLeft size={24} />
            </button>
            <button
              className="p-2 rounded-full bg-gray-300 hover:bg-electblue hover:text-white transition-colors"
              onClick={() => emblaApi && emblaApi.scrollNext()}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
