"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; 
import { FaQuoteLeft, FaPen } from "react-icons/fa"; 

const testimonials = [
  {
    id: 1,
    text: "When it comes to big data analytics and AI-powered forecasting, Alveum is unparalleled. They helped us develop a predictive modeling system that has dramatically improved our risk assessment accuracy.",
    name: "John Doe",
    title: "CEO, Tech Innovations",
  },
  {
    id: 2,
    text: "When it comes to big data analytics and AI-powered forecasting, Alveum is unparalleled. They helped us develop a predictive modeling system that has dramatically improved our risk assessment accuracy.",
    name: "Jane Smith",
    title: "COO, Green Future",
  },
  {
    id: 3,
    text: "When it comes to big data analytics and AI-powered forecasting, Alveum is unparalleled. They helped us develop a predictive modeling system that has dramatically improved our risk assessment accuracy.",
    name: "Michael Lee",
    title: "CTO, DataFlow Inc.",
  },
  {
    id: 4,
    text: "When it comes to big data analytics and AI-powered forecasting, Alveum is unparalleled. They helped us develop a predictive modeling system that has dramatically improved our risk assessment accuracy.",
    name: "Emma Brown",
    title: "Director, BlueTech",
  },
];

const AUTOPLAY_INTERVAL = 5000; 

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      containScroll: "trimSnaps", 
      align: "start", 
      slidesToScroll: "auto", 
      dragFree: false, 
    },
    [Autoplay({ delay: AUTOPLAY_INTERVAL })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollState);
    updateScrollState();
  }, [emblaApi, updateScrollState]);

  return (
    <section className="bg-[#F9F9FF] py-12">
      <div className="container-custom mx-auto">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-[2rem] font-bold mb-4 text-black">
            Testi<span className="text-electblue">monials</span>
          </h2>
          <h5 className="text-lg text-textcolor">
            These testimonials cover a range of industries and highlight various aspects of Alveum's services, including technical expertise, innovation, industry knowledge, and commitment to ethics and sustainability.
          </h5>
        </div>

        <div className="relative mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <div className="bg-[#F5F5FA] p-8 pt-10 shadow-lg rounded-lg relative">
                    <FaQuoteLeft className="absolute top-0 left-3 text-[#E3E3E6] w-12 h-12" />

                    <p className="text-lg text-[#727B9A] italic leading-relaxed text-left relative">
                      {testimonial.text}
                    </p>

                    <div className="flex justify-end mt-2">
                      <FaQuoteLeft className="text-[#E3E3E6] w-12 h-12 rotate-180" />
                    </div>

                    <div className="mt-6 flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-electblue rounded-full shadow-md border-2 border-white">
                        <FaPen className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-xl font-semibold text-gray-900">{testimonial.name}</span>
                        <span className="text-electblue font-semibold text-sm">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex ? "bg-electblue w-4 h-4" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
