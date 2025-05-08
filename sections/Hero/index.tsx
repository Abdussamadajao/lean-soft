"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  "/hero/hr1.png",
  "/hero/hr2.png",
  "/hero/hr3.png",
  "/hero/hr4.png",
  "/hero/hr5.png",
  "/hero/hr6.png",
];

const slideTexts = [
  {
    title: "LeanSoftWorks",
    subtitle: "Smart Software. Real Impact",
    desc: "LeanSoftWorks specializes in Mobile App Development, Custom Software, and AI/ML solutions to help businesses grow smarter.",
  },
  {
    title: "LeanSoftWorks",
    subtitle: "Smart Software. Real Impact",
    desc: "LeanSoftWorks specializes in Mobile App Development, Custom Software, and AI/ML solutions to help businesses grow smarter.",
  },
  {
    title: "LeanSoftWorks",
    subtitle: "Smart Software. Real Impact",
    desc: "LeanSoftWorks specializes in Mobile App Development, Custom Software, and AI/ML solutions to help businesses grow smarter.",
  },
  {
    title: "LeanSoftWorks",
    subtitle: "Smart Software. Real Impact",
    desc: "LeanSoftWorks specializes in Mobile App Development, Custom Software, and AI/ML solutions to help businesses grow smarter.",
  },
  {
    title: "LeanSoftWorks",
    subtitle: "Smart Software. Real Impact",
    desc: "LeanSoftWorks specializes in Mobile App Development, Custom Software, and AI/ML solutions to help businesses grow smarter.",
  },
  {
    title: "LeanSoftWorks",
    subtitle: "Smart Software. Real Impact",
    desc: "LeanSoftWorks specializes in Mobile App Development, Custom Software, and AI/ML solutions to help businesses grow smarter.",
  },
];

const Hero: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [
    // Autoplay({ delay: 5000 }),
  ]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    updateButtons();
  }, [emblaApi, updateButtons]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section
      id="hero"
      className="relative w-full h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex flex-col h-full transform translate-y-0">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] relative h-full" key={index}>
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <motion.h2
                  initial={{ y: -50, opacity: 0 }}
                  animate={selectedIndex === index ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="text-xl sm:text-3xl font-semibold tracking-wide">
                  {slideTexts[index]?.title}
                </motion.h2>

                <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={selectedIndex === index ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="text-4xl sm:text-6xl font-extrabold mt-4 drop-shadow-lg">
                  {slideTexts[index]?.subtitle}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={selectedIndex === index ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                  className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                  {slideTexts[index]?.desc}
                </motion.p>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={selectedIndex === index ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 1.3,
                  }}
                  className="mt-6 flex gap-6 flex-col md:flex-row">
                  <Link href="/#services" passHref>
                    <Button
                      asChild
                      className="bg-electblue z-[100] hover:bg-transparent hover:text-electblue border border-transparent hover:border-electblue transition-all duration-300 px-6 py-2 rounded-sm text-white font-semibold shadow-lg">
                      EXPLORE OUR SERVICES
                    </Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Button
                      asChild
                      className="bg-electblue z-[100] hover:bg-transparent hover:text-electblue border border-transparent hover:border-electblue transition-all duration-300 px-6 py-2 rounded-sm text-white font-semibold shadow-lg">
                      LET'S TALK
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none">
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 bg-electblue bg-opacity-50 text-white rounded-none hover:bg-opacity-75 transition hover:cursor-pointer pointer-events-auto">
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 bg-electblue bg-opacity-50 text-white rounded-none hover:bg-opacity-75 transition hover:cursor-pointer pointer-events-auto">
          <ChevronRight size={30} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
