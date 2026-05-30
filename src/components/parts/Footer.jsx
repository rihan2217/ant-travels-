import { useState } from "react";
import skyline from "./../../assests/images/skyline.png";

const tabs = [
  "Pilgrimage Tours",
  "Hill Station Tours",
  "Rajasthan Tours",
  "Corporate & Event Rentals",
];

const linkColumns = [
  [
    "Delhi to Ayodhya Bus Rental",
    "Delhi to Varanasi Bus Rental",
    "Delhi to Prayagraj Bus Rental",
    "Delhi to Ujjain Bus Rental",
    "Delhi to Chitrakoot Bus Rental",
    "Delhi to Khatu Shyam Bus Rental",
    "Delhi to Salasar Balaji Bus Rental",
    "Delhi to Vaishno Devi Bus Rental",
  ],
  [
    "Delhi to Manali Bus Rental",
    "Delhi to Shimla Bus Rental",
    "Delhi to Mussoorie Bus Rental",
    "Delhi to Nainital Bus Rental",
    "Delhi to Ranikhet Bus Rental",
    "Delhi to Jim Corbett Bus Rental",
    "Delhi to Dehradun Bus Rental",
    "Delhi to Srinagar Bus Rental",
  ],
  [
    "Delhi to Jaipur Bus Rental",
    "Delhi to Jodhpur Bus Rental",
    "Delhi to Udaipur Bus Rental",
    "Delhi to Jaisalmer Bus Rental",
    "Delhi to Bikaner Bus Rental",
    "Delhi to Ranikhet Bus Rental",
    "Delhi to Jim Corbett Bus Rental",
    "Delhi to Orchha Bus Rental",
  ],
  [
    "Bus Rental for Corporate Events",
    "Wedding Bus Rental Service",
    "School / College Trip Bus Hire",
    "Airport / Station Transfer",
    "Outstation Group Tours Bus Rental",
  ],
];

const footerCompany = [
  "About Us",
  "Blog",
  "Online Payment",
  "Feedback",
  "Disclaimer",
  "Travel Tips",
  "Site Map",
];
const footerServices = [
  "Rent Bus",
  "Rent Car",
  "Rent Traveller / Mini Van",
  "Book Bus Ticket",
  "Popular Destination",
];
const footerCars = [
  "Swift Dzire Car Hire",
  "Hyundai Aura Car Hire",
  "Innova Crysta Car Hire",
  "Honda City Car Hire",
  "Toyota Fortuner Car Hire",
  "Ertiga Car Hire",
];
const footerCoach = [
  "Mini Bus Hire",
  "Bus Hire for Local City Tour",
  "Bus Hire for Airport Transfer",
  "Bus Hire for Outstation",
  "Bus Hire for Wedding",
  "Bus Hire for Chardham Yatra",
  "Bus Hire for Corporate Event",
];

export default function Footer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="font-sans text-gray-800 text-sm bg-white">
      {/* Quick Travel Links */}
      <div className="max-w-6xl mx-auto px-5 py-8 text-center">
        <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-700 mb-1">
          QUICK TRAVEL LINKS
        </h4>
        <h2 className="text-3xl font-bold text-green-600 mb-5">
          Explore Destination
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-1 rounded-full border text-xs cursor-pointer transition-colors ${
                activeTab === i
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-4 gap-x-4 text-left">
          {linkColumns.map((col, ci) => (
            <ul key={ci} className="space-y-1">
              {col.map((link, li) => (
                <li
                  key={li}
                  className="text-xs text-gray-700 before:content-['•'] before:mr-1"
                >
                  <a href="#" className="hover:text-green-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* City Skyline */}
      <div className="w-full overflow-hidden leading-none">
        <img
          src={skyline}
          alt="India Skyline"
          className="w-full object-cover object-bottom"
        />
      </div>

      {/* Footer */}
      <footer className="bg-[#222] text-gray-400 px-5 pt-8 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-2 gap-4 mb-6 ">
          {/* Brand */}
          <div className="max-w-sm mx-auto">
            <div>
              <span className="text-4xl font-black text-white leading-none">
                ANT
              </span>
              <div className="text-[10px] tracking-widest text-gray-400 uppercase border-t border-gray-600 pt-1 mt-0.5">
                TOURIST ————
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
              We are one of the oldest Transport Services providers based in ANT
              Travels and have been in the business for now over ten years.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white text-[10px] font-bold cursor-pointer">
                IG
              </span>
              <span className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white text-[10px] font-bold cursor-pointer">
                f
              </span>
              <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] font-bold cursor-pointer">
                ▶
              </span>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-3">Company</h5>
              <ul className="space-y-1">
                {footerCompany.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-400 hover:text-green-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-3">
                Our Services
              </h5>
              <ul className="space-y-1">
                {footerServices.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-400 hover:text-green-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book a Car */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-3">
                Book a Car
              </h5>
              <ul className="space-y-1">
                {footerCars.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-400 hover:text-green-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coach Hire */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-3">
                Coach Hire
              </h5>
              <ul className="space-y-1">
                {footerCoach.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-400 hover:text-green-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-8xl mx-auto border-t border-gray-700 pt-3 flex flex-wrap justify-between items-center gap-2">
          <p className="text-[10px] text-gray-600">
            © 2020 ANT TRAVEL PRIVATE LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            {[
              "PRIVACY POLICY",
              "TERMS & CONDITIONS",
              "REFUND POLICY & CANCELLATION",
            ].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-[10px] text-gray-600 hover:text-green-500"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
