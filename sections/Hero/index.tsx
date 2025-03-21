"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";

const slides = [hero1, hero2, hero3, hero4, hero1, hero2, hero3, hero4];

const slideTexts = [
  { title: "Slide One Title", subtitle: "Subtitle for Slide One", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Slide Two Title", subtitle: "Subtitle for Slide Two", desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Slide Three Title", subtitle: "Subtitle for Slide Three", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { title: "Slide Four Title", subtitle: "Subtitle for Slide Four", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
  { title: "Slide Five Title", subtitle: "Subtitle for Slide Five", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
  { title: "Slide Six Title", subtitle: "Subtitle for Slide Six", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit." },
  { title: "Slide Seven Title", subtitle: "Subtitle for Slide Seven", desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet." },
  { title: "Slide Eight Title", subtitle: "Subtitle for Slide Eight", desc: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora." }
];

const Hero: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [Autoplay({ delay: 5000 })]); // Set axis to "y" for vertical scrolling
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track active slide index

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap()); // Update active slide index
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
      className="relative w-full h-[calc(100vh-80px)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex flex-col h-full transform translate-y-0"> {/* Ensure slides stack vertically */}
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] relative h-full" key={index}>
              <Image src={slide} alt={`Slide ${index + 1}`} fill className="object-cover" />
              
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                {/* h2 - Slides in from the top */}
                <motion.h2
                  initial={{ y: -50, opacity: 0 }}
                  animate={selectedIndex === index ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
                  className="text-xl sm:text-3xl font-semibold tracking-wide"
                >
                  {slideTexts[index]?.title}
                </motion.h2>

                {/* h1 - Slides in from the top */}
                <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={selectedIndex === index ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                  className="text-4xl sm:text-6xl font-extrabold mt-4 drop-shadow-lg"
                >
                  {slideTexts[index]?.subtitle}
                </motion.h1>

                {/* Description - Fades in */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={selectedIndex === index ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                  className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                  {slideTexts[index]?.desc}
                </motion.p>

                {/* Buttons - Slide in from the bottom */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={selectedIndex === index ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 1.3 }}
                  className="mt-6 flex gap-6"
                >
                  <button className="bg-electblue hover:bg-blue-700 transition-all duration-300 px-6 py-2 rounded-sm text-white font-semibold shadow-lg">
                   OUR SERVICES
                  </button>
                  <button className="bg-electblue hover:bg-gray-800 transition-all duration-300 px-6 py-2 rounded-sm text-white font-semibold shadow-lg">
                    ABOUT US
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 bg-electblue bg-opacity-50 text-white rounded-none hover:bg-opacity-75 transition hover:cursor-pointer"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 bg-electblue bg-opacity-50 text-white rounded-none hover:bg-opacity-75 transition hover:cursor-pointer"
        >
          <ChevronRight size={30} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;