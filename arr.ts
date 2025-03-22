import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const contactCards = [
  {
    Icon: FaMapMarkerAlt,
    title: "North America",
    locations: [
      {
        country: "Canada",
        address: "Unit 700 - 333 Bering Avenue, Etobicoke, ON, Canada M8Z 3A8",
      },
      {
        country: "United States",
        address: "1901 1st Avenue STE 207, San Diego CA, USA 92101",
      },
    ],
  },
  {
    Icon: FaMapMarkerAlt,
    title: "Offshore",
    locations: [
      {
        country: "Nigeria",
        address:
          "Oniyangi Complex, Offa Garage Asa Dam Bypass, Ilorin, Kwara, Nigeria 240242",
      },
      {
        country: "Brazil",
        address: "R Augusto Dos Anjos, Barueri, Sao Paulo, Brazil 06485-370",
      },
    ],
  },
  {
    Icon: FaPhoneAlt,
    title: "Contact Details",
    details: [
      {
        label: "Let's talk innovation:",
        contact: "+1-CALL-NAME (225-525-8386)",
      },
      {
        label: "Reach out digitally, let’s innovate together:",
        contact: "test@test.com",
        Icon: FaEnvelope,
      },
    ],
  },
];
