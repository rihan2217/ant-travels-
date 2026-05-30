import { useState } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export default function DatePickerField({
  label,
  selected,
  onChange,
}) {
  const [open, setOpen] =
    useState(false)

  return (
    <div className="relative flex flex-col gap-2">
      
      <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </label>

      {/* CUSTOM INPUT */}
      <button
        type="button"
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          h-[54px]
          items-center
          justify-between
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-4
          text-sm
          text-gray-700
          transition-all
          hover:border-[#7A9B32]
        "
      >
        <span>
          {selected
            ? selected.toLocaleDateString()
            : "24/03/2026"}
        </span>

        <span className="text-gray-400">
          📅
        </span>
      </button>

      {/* FLOATING CALENDAR */}
      {open && (
        <div
          className="
            absolute
            top-[90px]
            z-50
            overflow-hidden
            rounded-3xl
            border
            border-gray-100
            bg-white
            p-4
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
        >
          <DatePicker
            inline
            selected={selected}
            onChange={(date) => {
              onChange(date)
              setOpen(false)
            }}
          />
        </div>
      )}

      {/* CUSTOM CALENDAR STYLE */}
      <style>
        {`
          .react-datepicker {
            border: none;
            font-family: inherit;
          }

          .react-datepicker__header {
            background: white;
            border-bottom: none;
          }

          .react-datepicker__current-month {
            font-size: 15px;
            font-weight: 600;
            color: #111827;
          }

          .react-datepicker__day-name {
            color: #9ca3af;
            font-size: 12px;
          }

          .react-datepicker__day {
            border-radius: 10px;
            transition: 0.2s;
          }

          .react-datepicker__day:hover {
            background: #eef5db;
          }

          .react-datepicker__day--selected {
            background: #7A9B32 !important;
            color: white !important;
          }

          .react-datepicker__navigation-icon::before {
            border-color: #7A9B32;
          }
        `}
      </style>
    </div>
  )
}