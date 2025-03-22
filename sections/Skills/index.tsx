"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; 

const Skills = () => {
  const skills = [
    { title: "AI & Machine Learning", percentage: 90 },
    { title: "Data Analytics", percentage: 85 },
    { title: "Cloud Solutions", percentage: 80 },
    { title: "Software Development", percentage: 95 },
    { title: "Automation", percentage: 75 },
  ];

  const faqs = [
    {
      question: "What services does Alveum provide?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "How does Alveum ensure quality?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What industries does Alveum serve?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-[2rem] font-bold mb-4 text-black">
            Skills & <span className="text-electblue">FAQ</span>
          </h2>
          <h5 className="text-lg text-center text-textcolor">
            This section highlights the key skills & competencies that set Alveum apart in the AI/ML software development industry.
          </h5>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="flex-1">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-black">{skill.title}</h3>
                  <span className="text-lg text-black font-semibold">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full rounded-full bg-electblue" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1">
            <Accordion type="single" collapsible className="space-y-8">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="shadow-lg rounded-lg"
                >
                  <AccordionTrigger className="text-lg font-semibold text-black hover:no-underline hover:bg-electblue hover:text-white data-[state=open]:bg-electblue data-[state=open]:text-white px-4 py-5 transition-all cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-textcolor px-4 py-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;