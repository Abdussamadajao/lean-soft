"use client";

import aboutImg from "@/public/images/about.jpg";
import Image from "next/image";


const About: React.FC = () => {
  return (

      <section  className="py-12 bg-white" id="about"> 
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            <h2 className="text-[2rem] font-bold mb-4 text-black">
              About <span className="text-electblue">LeanSoftWorks</span>
            </h2>
            <h5 className="text-lg text-center text-textcolor">
              At LeanSoftWorks, we build impactful digital solutions with precision and passion. With teams in UK and Nigeria, we combine global experience with local insights to deliver meaningful software experiences in mobile, cloud, and intelligent systems.
            </h5>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="flex-1">
              <h3 className="text-[1.5rem] font-semibold mb-1 text-black">
                Your Team.
              </h3>
              <p className="text-lg text-justify text-textcolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
