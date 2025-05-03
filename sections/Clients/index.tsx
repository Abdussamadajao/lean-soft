"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import kashere from "@/public/images/clients/kashere.png";


const clients = [kashere];

const Clients = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "keepSnaps",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const scrollLoop = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(scrollLoop, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-12 bg-white">
      <div className="container-custom mx-auto">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-[2rem] font-bold mb-4 text-black">
            Our <span className="text-electblue">Clients</span>
          </h2>
        </div>

        <div className="overflow-hidden mt-8" ref={emblaRef}>
          <div className="flex">
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="border rounded-lg p-2 shadow-md flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={client}
                  alt={`Client ${index + 1}`}
                  width={200}
                  height={122}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div > div > div {
            flex: 0 0 calc((100% - 2rem) / 3); 
            margin-right: 1rem;
          }
          div > div > div:last-child {
            margin-right: 0;
          }
        }
        @media (min-width: 1024px) {
          div > div > div {
            flex: 0 0 calc((100% - 4rem) / 5); 
            margin-right: 1rem;
          }
          div > div > div:last-child {
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
