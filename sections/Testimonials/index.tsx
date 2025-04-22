"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaQuoteLeft, FaPen } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Working with LeanSoftWorks was a game-changer. They didn't just build our mobile app — they helped us rethink the user experience from the ground up. The result? A 40% increase in user engagement within 2 months.",
    name: "John Doe",
    title: "CEO, Tech Innovations",
  },
  {
    id: 2,
    text: "As a startup, we needed a tech partner, not just coders. LeanSoftWorks guided us through architecture, MVP development, and launch — all within budget. They're the reason we hit product-market fit in record time.",
    name: "Jane Smith",
    title: "COO, Green Future",
  },
  // Add more testimonials if needed
];

const AUTOPLAY_INTERVAL = 5000;

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: AUTOPLAY_INTERVAL, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateScrollState);
    updateScrollState();

    return () => {
      emblaApi.off("select", updateScrollState);
    };
  }, [emblaApi, updateScrollState]);

  return (
    <section className="bg-[#F9F9FF] py-12">
      <div className="container-custom mx-auto px-4">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Testi<span className="text-electblue">monials</span>
          </h2>
          <p className="text-lg text-textcolor">
            These testimonials cover a range of industries and highlight various
            aspects of our services, including technical expertise, innovation,
            and commitment to excellence.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white p-8 pt-10 shadow-lg rounded-lg relative h-full">
                    <FaQuoteLeft className="absolute top-6 left-6 text-[#E3E3E6] text-4xl" />

                    <p className="text-lg text-[#727B9A] italic leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    <div className="flex justify-end">
                      <FaQuoteLeft className="text-[#E3E3E6] text-4xl rotate-180" />
                    </div>

                    <div className="mt-8 flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-electblue rounded-full shadow-md border-2 border-white">
                        <FaPen className="text-white text-xl" />
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-electblue font-medium">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-electblue w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
