// src/components/home/RelatedBusSection.jsx

const buses = [
  {
    name: "21 Sleeper (+2+1) AC Deluxe Coach",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    price: "₹9500",
  },

  {
    name: "21 Sleeper (+2+1) AC Deluxe Coach",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    price: "₹9500",
  },

  {
    name: "21 Sleeper (+2+1) AC Deluxe Coach",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    price: "₹9500",
  },

  {
    name: "21 Sleeper (+2+1) AC Deluxe Coach",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    price: "₹9500",
  },
]

export default function RelatedBusSection() {
  return (
    <section className="bg-[#f5f5f5] py-8">
      <div className="mx-auto max-w-8xl px-4 md:px-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Related Bus
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Similar options you may like
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {buses.map((bus, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                transition-all
                hover:shadow-md
              "
            >
              <div className="overflow-hidden">
                <img
                  src={bus.image}
                  alt={bus.name}
                  className="
                    h-45
                    w-full
                    object-cover
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                />
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-gray-900">
                  {bus.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600">
                    42 Seats
                  </span>

                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600">
                    AC
                  </span>

                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600">
                    Sleeper
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-wide text-gray-400">
                    Starting From
                  </p>

                  <h4 className="mt-1 text-2xl font-bold text-[#7A9B32]">
                    {bus.price}
                  </h4>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    className="
                      flex-1
                      rounded-full
                      border
                      border-gray-300
                      py-2.5
                      text-sm
                      font-medium
                      text-gray-700
                      transition-all
                      hover:bg-gray-100
                    "
                  >
                    View Buses
                  </button>

                  <button
                    className="
                      flex-1
                      rounded-full
                      bg-[#7A9B32]
                      py-2.5
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      hover:bg-[#6b892c]
                    "
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}