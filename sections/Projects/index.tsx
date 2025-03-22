"use client"; // Enable client-side interactivity

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import pr1 from "@/public/images/pr1.jpg";
import pr2 from "@/public/images/pr2.jpg";
import pr3 from "@/public/images/pr3.jpg";
import pr4 from "@/public/images/pr4.jpg";
import pr5 from "@/public/images/pr5.jpg";
import pr6 from "@/public/images/pr6.jpg";
import pr7 from "@/public/images/pr7.jpg";
import pr8 from "@/public/images/pr8.jpg";

const Projects = () => {
  // Array of portfolio items
  const portfolioItems = [
    { id: 1, image: pr1, category: "Tailored AI Systems", title: "AI-Powered Healthcare", description: "Revolutionizing healthcare diagnostics with AI.", link: "#" },
    { id: 2, image: pr2, category: "Predictive Modeling", title: "Financial Forecasting", description: "Optimizing financial predictions with advanced models.", link: "#" },
    { id: 3, image: pr3, category: "NLP Solutions", title: "Chatbot Development", description: "Building intelligent chatbots for customer support.", link: "#" },
    { id: 4, image: pr4, category: "Process Automation", title: "Supply Chain Automation", description: "Streamlining supply chain processes with automation.", link: "#" },
    { id: 5, image: pr5, category: "Tailored AI Systems", title: "AI for Retail", description: "Enhancing retail experiences with AI solutions.", link: "#" },
    { id: 6, image: pr6, category: "Predictive Modeling", title: "Weather Prediction", description: "Accurate weather forecasting using predictive models.", link: "#" },
    { id: 7, image: pr7, category: "NLP Solutions", title: "Sentiment Analysis", description: "Analyzing customer sentiment with NLP.", link: "#" },
    { id: 8, image: pr8, category: "Process Automation", title: "HR Process Automation", description: "Automating HR workflows for efficiency.", link: "#" },
  ];

  // State to track hovered item
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // State to track active category (default is "View All")
  const [activeCategory, setActiveCategory] = useState<string>("View All");

  // Unique categories
  const categories = ["View All", ...new Set(portfolioItems.map((item) => item.category))];

  // Filtered portfolio items based on active category
  const filteredItems = activeCategory === "View All"
    ? portfolioItems // Show all items if "View All" is selected
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-[2rem] font-bold mb-4 text-black">
            Recent <span className="text-electblue">Projects</span>
          </h2>
          <h5 className="text-lg text-center text-textcolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </h5>
        </div>

        {/* Category Filter Navbar */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full shadow-md text-base font-semibold transition-all duration-300 ease-in-out cursor-pointer ${
                activeCategory === category
                  ? "bg-electblue text-white" // Active category style
                  : "bg-[#DADADA] text-black hover:text-electblue" // Default and hover style
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden group h-fit" // Ensure height matches image height
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                initial={{ opacity: 0, scale: 0.9 }} // Initial animation state
                animate={{ opacity: 1, scale: 1 }} // Animate to this state
                exit={{ opacity: 0, scale: 0.9 }} // Exit animation state
                transition={{ type: "tween", duration: 0.3, ease: "easeOut" }} // Fast-slowing transition
                whileHover={{ scale: 1.05 }} // Zoom in effect on hover
              >
                {/* Portfolio Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Sliding Div */}
                <div
                  className={`absolute top-4 left-4 right-4 bottom-4 bg-electblue/90 text-white p-6 transform transition-transform duration-500 ${
                    hoveredItem === item.id ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="text-sm font-semibold underline hover:text-black transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;