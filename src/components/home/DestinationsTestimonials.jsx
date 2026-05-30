// src/components/home/DestinationsTestimonials.jsx

import { motion } from "framer-motion"

const destinations = [
  {
    title: "Delhi to Jaipur Bus Rental",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
    duration: "5 Night 2 Days",
    price: "₹25,000",
    popular: true,
  },

  {
    title: "Delhi to Agra Bus Rental",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop",
    duration: "5 Night 2 Days",
    price: "₹25,000",
  },

  {
    title: "Delhi to Chandigarh Bus Rental",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    duration: "5 Night 2 Days",
    price: "₹25,000",
  },

  {
    title: "Delhi to Manali Bus Rental",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    duration: "5 Night 2 Days",
    price: "₹25,000",
  },
]

const testimonials = [
  {
    name: "Ankit Sharma",
    review:
      "The booking experience was smooth and the bus was extremely clean. Driver was professional and punctual.",
  },

  {
    name: "Rahul Verma",
    review:
      "Very comfortable ride for our group trip. Pricing was transparent and support team was responsive.",
  },

  {
    name: "Neha Kapoor",
    review:
      "Excellent service for our outstation travel. The vehicle quality and overall experience were premium.",
  },
]

export default function DestinationsTestimonials() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      
      <div className="mx-auto max-w-8xl px-4 md:px-16">
        
        {/* TOP HEADING */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          
          <div>
            
            <span className="rounded-full bg-[#eef5db] px-4 py-2 text-sm font-semibold text-[#7A9B32]">
              Popular Routes
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Bus Rental Popular Destinations
            </h2>

            <p className="mt-3 text-gray-500">
              Top destinations frequently booked for group travel.
            </p>
          </div>

          <button
            className="
              rounded-full
              border
              border-[#c8d8a0]
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-[#7A9B32]
              transition-all
              hover:bg-[#eef5db]
            "
          >
            Explore All Routes
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          
          {destinations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
              }}
              className="
                group
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              "
            >
              
              <div className="relative h-60 overflow-hidden">
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                {item.popular && (
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      bg-[#7A9B32]
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-white
                    "
                  >
                    Popular
                  </div>
                )}

                <div className="absolute bottom-5 left-5 right-5">
                  
                  <p className="text-sm text-white/80">
                    {item.duration}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                
                <div>
                  
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Starting From
                  </p>

                  <h4 className="mt-1 text-2xl font-bold text-gray-900">
                    {item.price}
                  </h4>
                </div>

                <button
                  className="
                    rounded-full
                    bg-[#7A9B32]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:shadow-lg
                    hover:shadow-[#7A9B32]/20
                  "
                >
                  View Buses
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          
          <div className="text-center">
            
            <span className="rounded-full bg-[#eef5db] px-4 py-2 text-sm font-semibold text-[#7A9B32]">
              Testimonials
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Traveler Stories
            </h2>

            <p className="mt-3 text-gray-500">
              Every journey has a story. Here’s what our customers say.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-[28px]
                  border
                  border-gray-100
                  bg-white
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                "
              >
                
                <div className="flex gap-1 text-[#7A9B32]">
                  ★ ★ ★ ★ ★
                </div>

                <p className="mt-6 leading-relaxed text-gray-600">
                  “{item.review}”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  
                  <img
                    src={`https://i.pravatar.cc/150?img=${
                      index + 10
                    }`}
                    alt=""
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}