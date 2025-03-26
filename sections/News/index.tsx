import React from "react";
import Image from "next/image";
import { FaPen, FaCalendarAlt, FaHeart } from "react-icons/fa"; 
import n1 from "@/public/images/n1.jpg";
import n2 from "@/public/images/n2.jpg";
import n3 from "@/public/images/n3.jpg";

const newsData = [
  {
    id: 1,
    image: n1,
    name: "John Doe",
    date: "March 22, 2025",
    likes: 120,
    heading: "AI in Healthcare: Transforming the Future",
    text: "Artificial intelligence is reshaping the healthcare industry, improving diagnostics, patient care, and treatment plans. Experts predict AI will significantly reduce medical errors and enhance efficiency.",
  },
  {
    id: 2,
    image: n2,
    name: "Jane Smith",
    date: "March 20, 2025",
    likes: 95,
    heading: "The Rise of Sustainable Energy Solutions",
    text: "As global warming concerns rise, sustainable energy sources such as solar and wind power are becoming more crucial. Governments and businesses are investing heavily in clean energy innovations.",
  },
  {
    id: 3,
    image: n3,
    name: "Michael Lee",
    date: "March 18, 2025",
    likes: 78,
    heading: "How Blockchain is Revolutionizing Finance",
    text: "Blockchain technology is changing the financial sector by offering secure, decentralized solutions. From cryptocurrencies to smart contracts, blockchain is set to redefine transactions worldwide.",
  },
];

const News = () => {
  return (
    <section className=" bg-white">
      <div className="container-custom mx-auto">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="text-[2rem] font-bold mb-4 text-black">
            Latest <span className="text-electblue">News</span>
          </h2>
          <h5 className="text-lg text-textcolor">
            Stay updated with the latest industry trends, technological advancements, and expert insights from around the world.
          </h5>
        </div>

        <div className="grid gap-8 my-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="shadow-2xl rounded-lg overflow-hidden group transition-all duration-500 ease-in-out"
            >
              <div className="relative w-full h-56">
                <Image
                  src={news.image}
                  alt={news.heading}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
              </div>

              <div className="">
                <div className="flex items-center justify-between text-gray-700 text-sm border-y p-6">
                  <div className="flex items-center space-x-2">
                    <FaPen className="w-5 h-5 text-electblue" />
                    <span className="font-medium text-electblue">{news.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="w-5 h-5 text-gray-500" />
                    <span className="text-electblue">{news.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaHeart className="w-5 h-5 text-red-500" />
                    <span>{news.likes}</span>
                  </div>
                </div>

                <div className="mt-4 p-6">
                  <h2 className="text-xl font-bold text-black">
                    {news.heading}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                    {news.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
