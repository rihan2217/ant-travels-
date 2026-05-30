import {
  FaBus,
  FaPlaneDeparture,
  FaRing,
  FaBuilding,
  FaUsers,
  FaSchool,
} from "react-icons/fa"

import {
  motion,
} from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      icon: <FaBus />,
      title: "Local & Outstation",
      desc: "Comfortable city rides and long-distance travel with professional drivers.",
    },

    {
      icon: <FaPlaneDeparture />,
      title: "Airport Transfers",
      desc: "On-time pickups and drop-offs for airports with hassle-free experience.",
    },

    {
      icon: <FaRing />,
      title: "Wedding Transport",
      desc: "Luxury transportation arrangements for weddings and family events.",
    },

    {
      icon: <FaBuilding />,
      title: "Corporate Travel",
      desc: "Premium staff and executive transport solutions for companies.",
    },

    {
      icon: <FaUsers />,
      title: "Group Tours",
      desc: "Spacious buses and tempo travellers for group outings and tours.",
    },

    {
      icon: <FaSchool />,
      title: "School Trips",
      desc: "Safe and reliable buses for school excursions and educational trips.",
    },
  ]

  return (
    <section className="bg-[#f5f5f5] py-6">
      
      <div className="mx-auto max-w-8xl px-4 md:px-16">
        
        <div className="mb-4">
          
          <span className="rounded-full bg-[#eef5db] px-4 py-2 text-sm font-medium text-[#7A9B32]">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Services We Provide
          </h2>

          <p className="mt-4 max-w-2xl text-gray-500">
            Premium transportation services designed for comfort,
            safety and smooth travel experience across local and
            outstation routes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                rounded-3xl
                border
                border-gray-100
                bg-white
                p-7
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
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
                  text-2xl
                  text-[#7A9B32]
                  transition-all
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-500">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[40px]
            bg-[#3f3f3f]
            px-8
            py-16
            text-center
          "
        >
          
          <div
            className="
              absolute
              -top-20
              left-1/2
              h-75
              w-75
              -translate-x-1/2
              rounded-full
              bg-[#7A9B32]/20
              blur-3xl
            "
          />

          <div className="relative z-10">
            
            <h2 className="text-4xl font-bold text-white">
              Bus Hire Charges for
              <br />
              Outstation Trips
            </h2>

            <p className="mt-5 text-lg text-gray-300">
              Transparent pricing based on your travel requirements
            </p>

            {/* TAGS */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              
              {[
                "Distance / Per KM",
                "Travel Days",
                "Vehicle Type",
                "Toll & Parking",
                "Driver Allowance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-md
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}