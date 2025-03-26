"use client";

import {
  FaCode,
  FaRobot,
  FaCloud,
  FaChartLine,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";
import { Element } from "react-scroll";

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode className="w-12 h-12 text-electblue" />,
      title: "Custom Software Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <FaRobot className="w-12 h-12 text-electblue" />,
      title: "AI & Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <FaCloud className="w-12 h-12 text-electblue" />,
      title: "Cloud Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-electblue" />,
      title: "Data Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-electblue" />,
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <FaDatabase className="w-12 h-12 text-electblue" />,
      title: "Database Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Element name="services">
      <section className="bg-[#F9F9FF] py-12">
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            <h2 className="text-[2rem] font-bold mb-4 text-black">
              Our <span className="text-electblue">Services</span>
            </h2>
            <h5 className="text-lg text-center text-textcolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-textcolor">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Services;
