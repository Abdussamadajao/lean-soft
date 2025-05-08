import { contactCards } from "@/arr";
import React from "react";

const Contacts = () => {
  return (
    <section className="container-custom pb-[100px]">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 ">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="bg-white border w-80 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <card.Icon className="text-electblue text-3xl mb-4" />
            <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>

            {card.locations &&
              card.locations.map((location, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-semibold text-gray-700">
                    {location.country}
                  </h4>
                  <p className="text-electblue text-base">{location.address}</p>
                </div>
              ))}
            {card.details &&
              card.details.map((detail, i) => (
                <div
                  key={i}
                  className="mb-4 flex items-center flex-col justify-center"
                >
                  {detail.Icon && (
                    <detail.Icon className="text-electblue text-3xl mb-4 text-center" />
                  )}
                  <p className="text-gray-700 text-base">{detail.label}</p>
                  <p className="font-semibold text-base mt-1">
                    {detail.contact}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
