import { useMemo, useState } from "react"

import FormSelect from "../common/FormSelect"
import FormInput from "../common/FormInput"
import SectionTitle from "../common/SectionTitle"
import DatePickerField from "../common/DatePickerField"

import {
  tripTypes,
  vehicleData,
} from "../../data/vehicleData"

export default function TripSection({
  register,
  watch,
  setValue,
}) {
  const destinationType =
    watch("destinationType")

  const vehicleType =
    watch("vehicleType")

  const currentTripTypes =
    useMemo(() => {
      return (
        tripTypes[
          destinationType
        ] || []
      )
    }, [destinationType])

  const currentVehicles =
    useMemo(() => {
      return (
        vehicleData[
          vehicleType
        ] || []
      )
    }, [vehicleType])

  const [
    departureDate,
    setDepartureDate,
  ] = useState(null)

  const [
    arrivalDate,
    setArrivalDate,
  ] = useState(null)

  return (
    <div className="rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      
      <SectionTitle
        number="1"
        title="Vehicle Details"
      />

      <div className="grid gap-6 md:grid-cols-2">
        
        <FormSelect
          label="Destination"
          name="destinationType"
          options={[
            "Local City Travel",
            "Outstation",
          ]}
          setValue={setValue}
        />

        <FormSelect
          label="Trip Type"
          name="tripType"
          options={currentTripTypes}
          setValue={setValue}
        />

        
        <FormSelect
          label="Vehicle Type"
          name="vehicleType"
          options={Object.keys(
            vehicleData
          )}
          setValue={setValue}
        />

        <FormSelect
          label="Vehicle Name"
          name="vehicleName"
          options={currentVehicles}
          setValue={setValue}
        />

        <DatePickerField
          label="Departure Date"
          selected={departureDate}
          onChange={
            setDepartureDate
          }
        />

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
          
          <FormSelect
            label="Hour"
            name="hour"
            options={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ]}
            setValue={setValue}
          />

          <FormSelect
            label="Minute"
            name="minute"
            options={[
              "00",
              "05",
              "10",
              "15",
              "20",
              "25",
              "30",
              "35",
              "40",
              "45",
              "50",
              "55",
            ]}
            setValue={setValue}
          />

          <FormSelect
            label="AM/PM"
            name="ampm"
            options={[
              "AM",
              "PM",
            ]}
            setValue={setValue}
          />
        </div>

        <DatePickerField
          label="Arrival Date"
          selected={arrivalDate}
          onChange={
            setArrivalDate
          }
        />

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
          
          <FormSelect
            label="Hour"
            name="arrivalHour"
            options={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ]}
            setValue={setValue}
          />

          <FormSelect
            label="Minute"
            name="arrivalMinute"
            options={[
              "00",
              "05",
              "10",
              "15",
              "20",
              "25",
              "30",
              "35",
              "40",
              "45",
              "50",
              "55",
            ]}
            setValue={setValue}
          />

          <FormSelect
            label="AM/PM"
            name="arrivalAmPm"
            options={[
              "AM",
              "PM",
            ]}
            setValue={setValue}
          />
        </div>

      </div>
    </div>
  )
}