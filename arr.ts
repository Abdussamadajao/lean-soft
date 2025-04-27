import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const contactCards = [
  // {
  //   Icon: FaMapMarkerAlt,
  //   title: "North America",
  //   locations: [
  //     {
  //       country: "Canada",
  //       address: "Unit 700 - 333 Bering Avenue, Etobicoke, ON, Canada M8Z 3A8",
  //     },
  //     {
  //       country: "United States",
  //       address: "1901 1st Avenue STE 207, San Diego CA, USA 92101",
  //     },
  //   ],
  // },
  {
    Icon: FaMapMarkerAlt,
    title: "Offshore",
    locations: [
      {
        country: "Nigeria",
        address:
          "No. 8, Saadu Oganija Street, Gaa-Odota, Ilorin, Kwara State, Nigeria",
      },
    
    ],
  },
  {
    Icon: FaPhoneAlt,
    title: "Contact Details",
    details: [
      {
        label: "Let's talk innovation:",
        contact: "+234 703 367 3269",
      },
      {
        label: "Reach out digitally, let’s innovate together:",
        contact: "tech@leansoftworks.com",
        Icon: FaEnvelope,
      },
    ],
  },
];
