import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"

import { motion } from "framer-motion"

export default function ContactCTA() {
  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      label: "Toll-Free Support",
      value: "1800-1027-408",
    },

    {
      icon: <FaWhatsapp />,
      label: "WhatsApp Booking",
      value: "9811992209, 9811992203",
    },

    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "booking@anttravels.com",
    },
  ]

  return (
    <section className="bg-[#f5f5f5] py-8">
      
      <div className="mx-auto max-w-8xl px-4 md:px-16">
        
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-gray-100
            bg-white
            px-6
            py-14
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            md:px-12
          "
        >
          
          <div
            className="
              absolute
              -right-20
              -top-20
              h-65
              w-65
              rounded-full
              bg-linear-to-br
              from-[#b8d46b]
              via-[#dce8bc]
              to-transparent
              opacity-40
              blur-3xl
            "
          />

          <div className="relative z-10 text-center">
            
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#eef5db]
                px-4
                py-2
                text-sm
                font-semibold
                text-[#7A9B32]
              "
            >
              ● 24×7 AVAILABLE
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              24×7 Bus Booking in Delhi NCR
              <br />
              Contact ANT Travels
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
              Need instant booking for bus hire in Delhi NCR?
              Contact us now for quick response and seamless
              travel assistance anytime.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              
              {contactCards.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      rounded-3xl
                      border
                      border-gray-100
                      bg-[#7A9B32]
                      p-6
                      text-left
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
                      "
                    >
                      {item.icon}
                    </div>

                    <p className="mt-5 text-sm font-medium uppercase tracking-wide text-white">
                      {item.label}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white wrap-break-words">
                      {item.value}
                    </h3>
                  </motion.div>
                )
              )}
            </div>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              
              <button
                className="
                  rounded-full
                  bg-[#7A9B32]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  tracking-wide
                  text-white
                  shadow-lg
                  shadow-[#7A9B32]/30
                  transition-all
                  hover:-translate-y-1
                "
              >
                BOOK NOW →
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-[#c8d8a0]
                  bg-white
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  tracking-wide
                  text-[#7A9B32]
                  transition-all
                  hover:bg-[#eef5db]
                "
              >
                CHAT ON WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}