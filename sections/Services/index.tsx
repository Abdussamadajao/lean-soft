"use client";

import {
  FaCode,
  FaRobot,
  FaCloud,
  FaChartLine,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";


const Services: React.FC = () => {
  const services = [
    {
      icon: <FaMobileAlt className="w-12 h-12 text-electblue" />,
      title: "Mobile App Development",
      description:
        "Sleek, scalable apps for Android and iOS users everywhere.",
    },
    {
      icon: <FaRobot className="w-12 h-12 text-electblue" />,
      title: "Custom Software Development",
      description:
        "Bespoke software crafted around your business.",
    },
    {
      icon: <FaCode className="w-12 h-12 text-electblue" />,
      title: "AI & ML Solutions",
      description:
        "Intelligent automation that learns, predicts, and adapts.",
    },
    {
      icon: <FaCloud className="w-12 h-12 text-electblue" />,
      title: "Cloud Engineering",
      description:
        "Robust and secure systems built on modern cloud infrastructure.",
    },
    {
      icon: <FaDatabase className="w-12 h-12 text-electblue" />,
      title: "Database Architecture",
      description:
        "Reliable storage, structured for performance and security.",
    },
    // {
    //   icon: <FaDatabase className="w-12 h-12 text-electblue" />,
    //   title: "Database Management",
    //   description:
    //     "",
    // },
  ];

  return (

      <section id="services" className="bg-[#F9F9FF] py-12">
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            <h2 className="text-[2rem] font-bold mb-4 text-black">
              Our <span className="text-electblue">Services</span>
            </h2>
            <h5 className="text-lg text-center text-textcolor">
              We offer future-ready solutions to transform the way you work:
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
  
  );
};

export default Services;
