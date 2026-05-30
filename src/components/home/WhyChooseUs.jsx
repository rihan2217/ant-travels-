import {
  FaBus,
  FaUserTie,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaBus />,
      title: "Elite Fleet",
      desc: "Volvo & Bharat Benz luxury coaches",
    },

    {
      icon: <FaUserTie />,
      title: "Professional Chauffeurs",
      desc: "Experienced, trained & verified drivers",
    },

    {
      icon: <FaMapMarkedAlt />,
      title: "On Time Pickup",
      desc: "Reliable arrivals with live coordination",
    },

    {
      icon: <FaShieldAlt />,
      title: "Hygiene Assured",
      desc: "Clean & sanitized vehicles every trip",
    },

    {
      icon: <FaHandshake />,
      title: "Premium Comfort",
      desc: "Spacious seating with smooth rides",
    },

    {
      icon: <FaStar />,
      title: "Best Value",
      desc: "Affordable pricing for group travel",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="mx-auto max-w-8xl  md:px-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-[#dfe7cf]
            bg-[#f7faef]
            p-8
            md:p-14
          "
        >
          <div
            className="
              absolute
              -right-24
              -top-24
              h-130
              w-130
              rounded-full
              bg-linear-to-br
              from-[#b3db45]
              via-[#d7e8a3]
              to-transparent
              opacity-40
              blur-3xl
            "
          />
          <div
            className="
              absolute
              -left-24
              -bottom-24
              h-65
              w-130
              rounded-full
              bg-linear-to-br
              from-[#9fcc25]
              via-[#b7e433]
              to-transparent
              opacity-40
              blur-3xl
            "
          />
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-0.5 w-14 bg-[#7A9B32]" />

                <span className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B32]">
                  Elite Experience
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Why Choose
                <br />
                ANT Travels?
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-gray-600">
                We provide premium transportation services with luxury vehicles,
                trained drivers and seamless travel experiences for every
                journey.
              </p>

              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-4
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                "
              >
                <div className="flex -space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Trusted by 10,000+
                  </h4>

                  <p className="text-sm text-gray-500">
                    Travelers across India
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                      group
                      rounded-3xl
                      bg-white/70
                      p-6
                      backdrop-blur-md
                      transition-all
                    "
                >
                  <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#eef5db]
                        text-xl
                        text-[#7A9B32]
                        transition-all
                        group-hover:scale-110
                      "
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
