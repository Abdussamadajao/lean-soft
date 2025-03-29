import React from "react";
import Image from "next/image";
import { FaPen, FaCheck } from "react-icons/fa";
import { careersData } from "@/sections/career/Careers/careersData";

const Careers = () => {
  return (
    <section className="bg-white">
      <div className="container-custom mx-auto mt-22">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-4 text-black">
            Open <span className="text-electblue">Positions</span>
          </h2>
        </div>

        <div className="grid gap-8 my-8 grid-cols-1 mt-32">
          {careersData.map((career) => (
            <div
              key={career.id}
              className="shadow-2xl rounded-lg overflow-hidden group transition-all duration-500 ease-in-out max-w-[697px]"
            >
              <div className="relative w-full h-90">
                {/* Image with hover overlay */}
                <div className="relative w-full h-full">
                  <Image
                    src={career.image}
                    alt={career.heading}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
                </div>
                
                {/* Date badge positioned above the overlay */}
                <div className="absolute top-4 left-4 bg-electblue text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
                  {career.date}
                </div>
              </div>

              <div className="">
                <div className="flex items-center justify-between text-gray-700 text-sm border-y p-6">
                  <div className="flex items-center space-x-2">
                    <FaPen className="w-5 h-5 text-electblue" />
                    <span className="font-medium text-electblue">by {career.name}</span>
                  </div>
                </div>

                <div className="mt-4 p-6">
                  <h2 className="text-3xl font-bold text-headingcolor">
                    {career.heading}
                  </h2>
                  <p className="text-lg text-textcolor mt-2 leading-relaxed">
                    {career.text}
                  </p>
                  
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold mb-3 text-headingcolor">Key Responsibilities:</h2>
                    <ul className="space-y-2">
                      {career.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="mt-1 mr-2 flex-shrink-0 text-gray-500 bg-gray-200 rounded-full p-0.5" />
                          <span className="text-textcolor">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-electblue p-4 mt-6 rounded-lg">
                    <h2 className="text-3xl font-bold text-headingcolor mb-3">Qualifications:</h2>
                    <ul className="text-white space-y-2">
                      {career.qualifications.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="mt-1 mr-2 flex-shrink-0 text-electblue bg-white rounded-full p-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold mb-3 text-headingcolor">Additional Information</h2>
                    <div className="space-y-2 text-textcolor">
                      <p><span className="font-bold">Location:</span> {career.additionalInfo.location}</p>
                      <p><span className="font-bold">Citizenship:</span> {career.additionalInfo.citizenship}</p>
                      <p><span className="font-bold">Job Type:</span> {career.additionalInfo.jobType}</p>
                      <p><span className="font-bold">Pay:</span> {career.additionalInfo.pay}</p>
                      <p><span className="font-bold">Schedule:</span> {career.additionalInfo.schedule}</p>
                      <p><span className="font-bold">Experience:</span> {career.additionalInfo.experience}</p>
                      <p><span className="font-bold">Preferred Location:</span> {career.additionalInfo.preferredLocation}</p>
                      <p><span className="font-bold">Work Location:</span> {career.additionalInfo.workLocation}</p>
                      <p><span className="font-bold">Expected start date:</span> {career.additionalInfo.startDate}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold mb-3 text-headingcolor">Benefits</h2>
                    <ul className="space-y-2">
                      {career.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="mt-1 mr-2 flex-shrink-0 text-electblue" />
                          <span className="text-textcolor">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;