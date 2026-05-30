import { FaMapMarkerAlt, FaHeadphones } from "react-icons/fa";

import { MdVerified } from "react-icons/md";

import { RiCustomerService2Fill } from "react-icons/ri";

import { BsStars } from "react-icons/bs";
import india from "../../assests/images/india.png";

export default function Sidebar() {
  const stats = [
    {
      icon: <BsStars />,
      title: "5000+",
      subtitle: "Happy Customers",
    },

    {
      icon: <FaHeadphones />,
      title: "24x7",
      subtitle: "Local Support",
    },

    {
      icon: <RiCustomerService2Fill />,
      title: "Best Price",
      subtitle: "Guaranteed",
    },

    {
      icon: <MdVerified />,
      title: "Verified",
      subtitle: "Bus Owners",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-3xl shadow-sm">
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={india}
            alt="map"
            className="h-80 w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-b-2xl bg-[#7A9B32] p-4 text-white">
          <div className="w-full p-2 rounded-2xl bg-[#5d8010] text-center">
            <p className="text-xs uppercase opacity-70">Distance</p>

            <h3 className="mt-1 text-sm font-semibold">200 km</h3>
          </div>

          <div className="w-full p-2 rounded-2xl bg-[#5d8010] text-center">
            <p className="text-xs uppercase opacity-70">Est Time</p>

            <h3 className="mt-1 text-sm font-semibold">11h 20m</h3>
          </div>

          <div className="w-full p-2 rounded-2xl bg-[#5d8010] text-center">
            <p className="text-xs uppercase opacity-70">Stops</p>

            <h3 className="mt-1 text-sm font-semibold">2 Stops</h3>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl  shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
          alt="bus"
          className="h-80 w-full rounded-2xl object-cover"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-5 shadow-sm transition-all hover:-translate-y-1"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#eef5db] text-xl text-[#7A9B32]">
              {item.icon}
            </div>

            <h3 className="font-semibold text-gray-800">{item.title}</h3>

            <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex items-center gap-3 px-2">
        <div className="flex -space-x-3">
          <img
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />

          <img
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
            src="https://randomuser.me/api/portraits/women/44.jpg"
          />

          <img
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
            src="https://randomuser.me/api/portraits/men/11.jpg"
          />

          <img
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
            src="https://randomuser.me/api/portraits/women/68.jpg"
          />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-800">4.8 Ratings</h4>

          <p className="text-xs text-gray-500">1200+ Google Reviews</p>
        </div>
      </div>
    </div>
  );
}
