"use client";

import aboutImg from "@/public/images/about.jpg";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-[2rem] font-bold mb-4 text-black">
            About <span className="text-electblue">Alveum</span>
          </h2>
          <h5 className="text-lg text-center text-textcolor">
            Alveum praebet Classis Mundi Artificialis Intelligentia (AI), Machina
            Discentis (ML) Software Development officia ex nostro Nearshore Centro
            in Etobicoke, Ontario, Canada et nostro Offshore centro apud Ilorin,
            Kwara Status, Nigeria.
          </h5>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="flex-1">
            <h3 className="text-[1.5rem] font-semibold mb-1 text-black">Your Team.</h3>
            <p className="text-lg text-justify text-textcolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src={aboutImg}
              alt="About Alveum"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;