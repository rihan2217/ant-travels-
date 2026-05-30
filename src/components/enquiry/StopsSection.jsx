import { useState } from "react"

export default function StopsSection({
  register,
}) {
  const [stops, setStops] =
    useState([
      { id: 1 },
      { id: 2 },
    ])

  const addStop = () => {
    setStops([
      ...stops,
      {
        id: Date.now(),
      },
    ])
  }

  const removeStop = (id) => {
    setStops(
      stops.filter(
        (stop) =>
          stop.id !== id
      )
    )
  }

  return (
    <div className="mt-2 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      
      <div className="space-y-4">
        
        <input
          type="text"
          placeholder="Enter Pickup Point"
          {...register("pickup")}
          className="
            w-full
            rounded-2xl
            border
            border-gray-200
            px-4
            py-3
            text-sm
            outline-none
            focus:border-[#7A9B32]
            focus:ring-4
            focus:ring-[#7A9B32]/10
          "
        />

        {stops.map(
          (stop, index) => (
            <div key={stop.id}>
              
              <div className="mb-1 flex justify-end">
                
                <button
                  type="button"
                  onClick={() =>
                    removeStop(
                      stop.id
                    )
                  }
                  className="text-xs font-medium text-red-500"
                >
                  Remove
                </button>
              </div>

              <input
                type="text"
                placeholder={`Add Stop ${
                  index + 1
                }`}
                {...register(
                  `stop_${index}`
                )}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  text-sm
                  outline-none
                  focus:border-[#7A9B32]
                  focus:ring-4
                  focus:ring-[#7A9B32]/10
                "
              />
            </div>
          )
        )}

        <div className="flex justify-end">
          
          <button
            type="button"
            onClick={addStop}
            className="
              text-sm
              font-medium
              text-[#7A9B32]
            "
          >
            Add Stop
          </button>
        </div>
      </div>
    </div>
  )
}