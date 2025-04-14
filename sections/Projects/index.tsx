"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import pr1 from "@/public/images/pr1.jpg";
import pr2 from "@/public/images/pr2.jpg";
import pr3 from "@/public/images/pr3.jpg";
import pr4 from "@/public/images/pr4.jpg";
import pr5 from "@/public/images/pr5.jpg";
import pr6 from "@/public/images/pr6.jpg";
import pr7 from "@/public/images/pr7.jpg";
import pr8 from "@/public/images/pr8.jpg";


const Projects = () => {
  const portfolioItems = [
    {
      id: 1,
      image: pr1,
      category: "FinTech",
      title: "AI-Powered Healthcare",
      description: "Revolutionizing healthcare diagnostics with AI.",
      link: "#",
    },
    {
      id: 2,
      image: pr2,
      category: "eCommerce",
      title: "Financial Forecasting",
      description: "Optimizing financial predictions with advanced models.",
      link: "#",
    },
    {
      id: 3,
      image: pr3,
      category: "Journal Management website",
      title: "Chatbot Development",
      description: "Building intelligent chatbots for customer support.",
      link: "#",
    },
    {
      id: 4,
      image: pr4,
      category: "Event management applications",
      title: "Supply Chain Automation",
      description: "Streamlining supply chain processes with automation.",
      link: "#",
    },
    {
      id: 5,
      image: pr5,
      category: "FinTech",
      title: "AI for Retail",
      description: "Enhancing retail experiences with AI solutions.",
      link: "#",
    },
    {
      id: 6,
      image: pr6,
      category: "eCommerce",
      title: "Weather Prediction",
      description: "Accurate weather forecasting using predictive models.",
      link: "#",
    },
    {
      id: 7,
      image: pr7,
      category: "Journal Management website",
      title: "Sentiment Analysis",
      description: "Analyzing customer sentiment with NLP.",
      link: "#",
    },
    {
      id: 8,
      image: pr8,
      category: "Event management applications",
      title: "HR Process Automation",
      description: "Automating HR workflows for efficiency.",
      link: "#",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>("View All");

  const categories = [
    "View All",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "View All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
  
      <section id="projects" className="py-12 bg-white">
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            <h2 className="text-[2rem] font-bold mb-4 text-black">
              Recent <span className="text-electblue">Projects</span>
            </h2>
            <h5 className="text-lg text-center text-textcolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </h5>
          </div>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full shadow-md text-base font-semibold transition-all duration-300 ease-in-out cursor-pointer ${
                  activeCategory === category
                    ? "bg-electblue text-white"
                    : "bg-[#DADADA] text-black hover:text-electblue"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-center">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative overflow-hidden group flex justify-center items-center"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover rounded-lg"
                      width={350}
                      height={300}
                      style={{ maxWidth: "350px", maxHeight: "300px" }}
                    />
                  </div>

                  <motion.div
                    className="absolute top-4 left-10 right-10 bottom-4 bg-electblue/90 text-white p-6 rounded-lg shadow-lg"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={
                      hoveredItem === item.id
                        ? { x: 0, opacity: 1 }
                        : { x: "-100%", opacity: 0 }
                    }
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    style={{
                      visibility:
                        hoveredItem === item.id ? "visible" : "hidden",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    <a
                      href={item.link}
                      className="text-sm font-semibold underline hover:text-black transition-colors"
                    >
                      Learn More
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    
  );
};

export default Projects;
